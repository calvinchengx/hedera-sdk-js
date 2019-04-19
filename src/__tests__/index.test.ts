import { ASN1, BitString, Class, Tag } from '@fidm/asn1'
import forge from 'node-forge'
import { HederaAccount, HederaBuilder } from '..'
import { AccountID } from '../../pbweb/BasicTypes_pb'
import HederaNode from '../hederanode'

const ed25519 = forge.pki.ed25519
interface IStringBufferMap {
    [s: string]: Buffer
}

test('Hedera', async () => {
    exitIfNotNode()

    const genesis = await getGenesisKeys()
    if (genesis === undefined) {
        // No genesis account and keys were defined in environment variable,
        // so we exit. This test will not run.
        return
    }

    // instantiate an example account
    const nodeAccountID = new AccountID()
    nodeAccountID.setAccountnum(3)

    // instantiate a Hedera client that can connect to our gRPC services
    const node = new HederaNode(
        'testnet',
        '35.237.130.140:50211',
        nodeAccountID
    )

    const encoding = 'binary'
    let privKeyHex = genesis.privKey
    let pubKeyHex = genesis.pubKey
    // console.log(privKeyHex.length) // 96, indicative that our key is ASN.1 DER-encoded
    // console.log(pubKeyHex.length)  // 88, indicative that our key is ASN.1 DER-encoded

    let keys: IStringBufferMap
    if (genesis.asn1 === true) {
        const privKeyBytes = forge.util.hexToBytes(genesis.privKey)
        const pubKeyBytes = forge.util.hexToBytes(genesis.pubKey)
        const privKeyNativeBuffer = Buffer.from(privKeyBytes, encoding)
        const pubKeyNativeBuffer = Buffer.from(pubKeyBytes, encoding)
        // parse out our ed25519 keys that are encoded in ASN1 DER
        keys = parseASN1Keys(privKeyNativeBuffer, pubKeyNativeBuffer)
        // our retrieved ed25519 private key from ASN1 DER is 32 bytes length
        // In the context of node-forge, this parsed out private key is in fact the seed
        const keypairGen = ed25519.generateKeyPair({ seed: keys.privKeyBuffer })
        // Now, we have node-forge compliant privateKey and publicKey
        const privateKeyNativeBuffer = keypairGen.privateKey
        const publicKeyNativeBuffer = keypairGen.publicKey
        // Sanity check using node-forge functions
        const message = 'hello'
        const signature = ed25519.sign({
            message,
            // tslint:disable-next-line:object-literal-sort-keys
            encoding,
            privateKey: privateKeyNativeBuffer
        })
        const verify = ed25519.verify({
            message,
            // tslint:disable-next-line:object-literal-sort-keys
            encoding,
            signature,
            publicKey: publicKeyNativeBuffer
        })
        expect(verify).toBe(true)
        // We can also be re-assured that
        // the parsed out public key is exactly equal to the node-forge-format public key
        expect(keys.pubKeyBuffer).toEqual(publicKeyNativeBuffer)

        // now that we have node-forge compliant privateKey and publicKey,
        // we can standardize its usage

        // converting NativeBuffer into bytes
        const privateKeyBytes = forge.util.createBuffer(
            privateKeyNativeBuffer,
            'raw'
        )
        const publicKeyBytes = forge.util.createBuffer(
            publicKeyNativeBuffer,
            'raw'
        )
        // converting bytes into hex-string
        privKeyHex = forge.util.bytesToHex(privateKeyBytes.getBytes())
        pubKeyHex = forge.util.bytesToHex(publicKeyBytes.getBytes())
    }

    const payingAccount = HederaAccount.initWith(
        genesis.account,
        pubKeyHex,
        privKeyHex
    )

    const newAccount = HederaAccount.init()
    const keypair = newAccount.getKeyPair()
    const publicKey = keypair!.getPublicKey()
    const initialBalance = 10000

    const hedera = new HederaBuilder(node)
        .withOperator(payingAccount)
        .cryptoCreate(publicKey, initialBalance)
        .sign()

    expect(hedera!.node.getAccountID().getRealmnum()).toBe(0)
    expect(hedera!.node.getAccountID().getShardnum()).toBe(0)
    expect(hedera!.node.getAccountID().getAccountnum()).toBe(3)
    expect(hedera!.operator.getAccountID()).toBe(payingAccount.getAccountID())
    expect(hedera!.operator.getKeyPair()).toBe(payingAccount.getKeyPair())
})

const parseASN1Keys = (privNativeBuffer: Buffer, pubNativeBuffer: Buffer) => {
    const captures = ASN1.parseDERWithTemplate(
        privNativeBuffer,
        privateKeyValidator
    )
    const capturesLen = captures.privateKey.value.length as number
    if (capturesLen !== 34) {
        throw new Error(
            `We expect the captured ed25519 private key to have an additional 2 \
            bytes 0x04 prepended, so length is 32 + 2 (34), but our length is ${capturesLen}`
        )
    }
    let privKeyBuffer = captures.privateKey.value as Buffer
    privKeyBuffer = privKeyBuffer.slice(2)
    if (privKeyBuffer.byteLength !== 32) {
        throw new Error(`We expect our actual ed25519 private key buffer to be 32 bytes \
        but your private key buffer byte length is ${privKeyBuffer.byteLength}`)
    }
    // public key
    const pubCaptures = ASN1.parseDERWithTemplate(
        pubNativeBuffer,
        publicKeyValidator
    )
    const pubKeyBitString = pubCaptures.publicKey.value as BitString
    const pubKeyBuffer = pubKeyBitString.buf
    if (pubKeyBuffer.length !== 32) {
        throw new Error(`We expect our ed25519 public key buffer to be 32 bytes \
        but your public key buffer byte length is ${pubKeyBuffer.length}`)
    }

    return {
        privKeyBuffer,
        pubKeyBuffer
    }
}

const publicKeyValidator = {
    name: 'SubjectPublicKeyInfo',
    // tslint:disable-next-line:object-literal-sort-keys
    class: Class.UNIVERSAL,
    tag: Tag.SEQUENCE,
    // tslint:disable-next-line:object-literal-sort-keys
    capture: 'subjectPublicKeyInfo',
    value: [
        {
            name: 'SubjectPublicKeyInfo.AlgorithmIdentifier',
            // tslint:disable-next-line:object-literal-sort-keys
            class: Class.UNIVERSAL,
            tag: Tag.SEQUENCE,
            value: [
                {
                    name: 'AlgorithmIdentifier.algorithm',
                    // tslint:disable-next-line:object-literal-sort-keys
                    class: Class.UNIVERSAL,
                    tag: Tag.OID,
                    // tslint:disable-next-line:object-literal-sort-keys
                    capture: 'publicKeyOID'
                }
            ]
        },
        {
            // subjectPublicKey
            name: 'SubjectPublicKeyInfo.subjectPublicKey',
            // tslint:disable-next-line:object-literal-sort-keys
            class: Class.UNIVERSAL,
            tag: Tag.BITSTRING,
            capture: 'publicKey'
        }
    ]
}

const privateKeyValidator = {
    name: 'PrivateKeyInfo',
    // tslint:disable-next-line:object-literal-sort-keys
    class: Class.UNIVERSAL,
    tag: Tag.SEQUENCE,
    capture: 'privateKeyInfo',
    value: [
        {
            name: 'PrivateKeyInfo.Version',
            // tslint:disable-next-line:object-literal-sort-keys
            class: Class.UNIVERSAL,
            tag: Tag.INTEGER,
            capture: 'privateKeyVersion'
        },
        {
            name: 'PrivateKeyInfo.AlgorithmIdentifier',
            // tslint:disable-next-line:object-literal-sort-keys
            class: Class.UNIVERSAL,
            tag: Tag.SEQUENCE,
            value: [
                {
                    name: 'PrivateKeyAlgorithmIdentifier.algorithm',
                    // tslint:disable-next-line:object-literal-sort-keys
                    class: Class.UNIVERSAL,
                    tag: Tag.OID,
                    capture: 'privateKeyOID'
                }
            ]
        },
        {
            name: 'PrivateKeyInfo.PrivateKey',
            // tslint:disable-next-line:object-literal-sort-keys
            class: Class.UNIVERSAL,
            tag: Tag.OCTETSTRING,
            capture: 'privateKey'
        }
    ]
}

// nodejs or web, returns true if we are in nodejs environment
const isNode = () => {
    let node = false
    if (typeof process === 'object') {
        if (typeof process.versions === 'object') {
            if (typeof process.versions.node !== 'undefined') {
                node = true
            }
        }
    }
    return node
}

const exitIfNotNode = () => {
    if (isNode() === false) {
        return
    }
}

const getGenesisKeys = async () => {
    if (isNode() === false) {
        return undefined
    }

    if (
        process.env.GENESIS_ACCOUNT_ID !== undefined &&
        process.env.GENESIS_PRIVATE_KEY &&
        process.env.GENESIS_PUBLIC_KEY &&
        process.env.GENESIS_ASN1
    ) {
        const asn1 =
            process.env.GENESIS_ASN1.toLowerCase() === 'true' ? true : false
        return {
            account: process.env.GENESIS_ACCOUNT_ID,
            asn1,
            privKey: process.env.GENESIS_PRIVATE_KEY,
            pubKey: process.env.GENESIS_PUBLIC_KEY
        }
    } else {
        return undefined
    }
}
