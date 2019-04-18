class KeyPair {
    public publicKey: string
    public privateKey: string

    constructor(publicKeyHex: string = '', privateKeyHex: string = '') {
        this.publicKey = publicKeyHex
        this.privateKey = privateKeyHex
    }
}

export default KeyPair
