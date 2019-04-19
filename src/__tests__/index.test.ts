
import forge from 'node-forge'
import { HederaAccount, HederaBuilder } from '..'
import { AccountID } from '../../pbweb/BasicTypes_pb'
import asn1parser from '../crypto/asn1parser'
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
        keys = asn1parser(privKeyNativeBuffer, pubKeyNativeBuffer)
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
