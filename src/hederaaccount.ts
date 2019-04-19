import forge from 'node-forge'
import { AccountID } from '../pbweb/BasicTypes_pb'
import i from './internal'
import KeyPair from './keypair'

const ed25519 = forge.pki.ed25519

class HederaAccount {
    /**
     * Initialise a new account by providing
     * @param {string} accountIDString - accountID string delimited by ".", e.g. shardNumn.realmNum.accountNum
     * @param {string} publicKeyHex - a public key hex-encoded string (ed25519)
     * @param {string} privateKeyHex - a private key hex-encoded string (ed25519)
     * @param {boolean} asn1 - defaults to false. Set to true if we are initialising this account with keys that are ASN.1 DER-encoded.
     */
    public static initWith(
        accountIDString: string,
        publicKeyHex: string,
        privateKeyHex: string,
        asn1: boolean = false
    ) {
        const accountID = i.accountIDFromString(accountIDString)
        const keypair = new KeyPair(publicKeyHex, privateKeyHex, asn1)
        return new HederaAccount(accountID, keypair)
    }

    /**
     * Initialise a new account with a randomly generated ed25519 keypair
     */
    public static init() {
        const seed = forge.random.getBytesSync(32)
        const seedBuffer = Buffer.from(seed, 'binary')
        const kp = ed25519.generateKeyPair({ seed })
        const publicKeyBuffer = forge.util.createBuffer(kp.publicKey)
        const publicKeyHex = forge.util.bytesToHex(publicKeyBuffer.data)
        const privateKeyBuffer = forge.util.createBuffer(kp.privateKey)
        const privateKeyHex = forge.util.bytesToHex(privateKeyBuffer.data)
        const keypair = new KeyPair(
            publicKeyHex,
            privateKeyHex,
            false,
            seedBuffer
        )
        return new HederaAccount(undefined, keypair)
    }

    private accountID?: AccountID
    private keypair?: KeyPair

    constructor(accountID?: AccountID, keypair?: KeyPair) {
        this.accountID = accountID
        this.keypair = keypair
    }

    public setAccountID(accountID: AccountID) {
        this.accountID = accountID
    }

    public setKeyPair(keypair: KeyPair) {
        this.keypair = keypair
    }

    public getAccountID(): AccountID | undefined {
        return this.accountID
    }

    public getAccountIDAsString(): string | undefined {
        if (this.accountID !== undefined) {
            return i.accountIDAsString(this.accountID)
        }
        return undefined
    }

    public getKeyPair(): KeyPair | undefined {
        return this.keypair
    }

    public setAccountIDWithString(accountIDString: string) {
        this.accountID = i.accountIDFromString(accountIDString)
    }

    public setKeyPairWithHexString(
        publicKeyHex: string,
        privateKeyHex: string
    ) {
        this.keypair = new KeyPair(publicKeyHex, privateKeyHex)
    }
}

export default HederaAccount
