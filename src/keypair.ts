import forge from 'node-forge'
import { Key } from '../pbweb/BasicTypes_pb'
import asn1parser from './crypto/asn1parser'

const ed25519 = forge.pki.ed25519

class KeyPair {
    private publicKeyHex: string
    private privateKeyHex: string
    private seed?: Buffer

    constructor(
        publicKeyHex: string,
        privateKeyHex: string,
        asn1: boolean = false,
        seed?: Buffer
    ) {
        if (asn1 === true) {
            const {
                privateKeyHexForge,
                publicKeyHexForge,
                seedForge
            } = handleASN1(privateKeyHex, publicKeyHex)
            this.publicKeyHex = publicKeyHexForge
            this.privateKeyHex = privateKeyHexForge
            this.seed = seedForge
        } else {
            this.publicKeyHex = publicKeyHex
            this.privateKeyHex = privateKeyHex
            this.seed = seed
        }
    }

    public getPrivateKey(): Key {
        const privateKeyBytes = forge.util.hexToBytes(this.privateKeyHex)
        const privateKeyNativeBuffer = Buffer.from(privateKeyBytes, 'binary')
        const privateKey = new Key()
        privateKey.setEd25519(privateKeyNativeBuffer)
        return privateKey
    }

    public getPublicKey(): Key {
        const publicKeyBytes = forge.util.hexToBytes(this.publicKeyHex)
        const publicKeyNativeBuffer = Buffer.from(publicKeyBytes, 'binary')
        const publicKey = new Key()
        publicKey.setEd25519(publicKeyNativeBuffer)
        return publicKey
    }

    public getPrivateKeyHex(): string {
        return this.privateKeyHex
    }

    public getPublicKeyHex(): string {
        return this.publicKeyHex
    }

    public getSeed(): Buffer | undefined {
        return this.seed
    }
}

/**
 * Handles ASN.1 DER-encoded hex string keypair, converting it into node-forge-compliant keypair
 * @param {string} privateKeyHex - ASN.1 DER-encoded hex string private key
 * @param {string} publicKeyHex - ASN.1 DER-encoded hex string public key
 */
const handleASN1 = (privateKeyHex: string, publicKeyHex: string) => {
    const encoding = 'binary'
    const privKeyBytes = forge.util.hexToBytes(privateKeyHex)
    const pubKeyBytes = forge.util.hexToBytes(publicKeyHex)
    const privKeyBuffer = Buffer.from(privKeyBytes, encoding)
    const pubKeyBuffer = Buffer.from(pubKeyBytes, encoding)

    // parse out our ed25519 keys that are encoded in ASN1 DER
    const keys = asn1parser(privKeyBuffer, pubKeyBuffer)
    // our retrieved ed25519 private key from ASN1 DER is 32 bytes length
    // In the context of node-forge, this parsed out private key is, in fact, the seed
    const seed = keys.privKeyBuffer
    const keypairGen = ed25519.generateKeyPair({ seed })
    // Now, we have node-forge compliant privateKey and publicKey
    const privKeyGenBuffer = keypairGen.privateKey
    const pubKeyGenBuffer = keypairGen.publicKey
    // converting generated NativeBuffer into bytes
    const privateKeyBytes = forge.util.createBuffer(privKeyGenBuffer, 'raw')
    const publicKeyBytes = forge.util.createBuffer(pubKeyGenBuffer, 'raw')
    // converting bytes into hex-string that is node-forge-compliant
    const privateKeyHexForge = forge.util.bytesToHex(privateKeyBytes.getBytes())
    const publicKeyHexForge = forge.util.bytesToHex(publicKeyBytes.getBytes())
    const seedForge = seed

    return { privateKeyHexForge, publicKeyHexForge, seedForge }
}

export default KeyPair
