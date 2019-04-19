import forge from 'node-forge'
import { Key } from '../pbweb/BasicTypes_pb'

class KeyPair {
    private publicKeyHex: string
    private privateKeyHex: string

    constructor(publicKeyHex: string = '', privateKeyHex: string = '') {
        this.publicKeyHex = publicKeyHex
        this.privateKeyHex = privateKeyHex
    }

    public getPublicKey(): Key {
        const publicKeyBytes = forge.util.hexToBytes(this.publicKeyHex)
        const publicKeyNativeBuffer = Buffer.from(publicKeyBytes, 'binary')
        const publicKey = new Key()
        publicKey.setEd25519(publicKeyNativeBuffer)
        return publicKey
    }

    public getPublicKeyHex(): string {
        return this.publicKeyHex
    }

    public getPrivateKey(): Key {
        const privateKeyBytes = forge.util.hexToBytes(this.privateKeyHex)
        const privateKeyNativeBuffer = Buffer.from(privateKeyBytes, 'binary')
        const privateKey = new Key()
        privateKey.setEd25519(privateKeyNativeBuffer)
        return privateKey
    }

    public getPrivateKeyHex(): string {
        return this.privateKeyHex
    }
}

export default KeyPair
