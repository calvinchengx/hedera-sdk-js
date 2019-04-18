import forge from 'node-forge'
import { AccountID } from '../pbweb/BasicTypes_pb'
import i from './internal'
import KeyPair from './keypair'

const ed25519 = forge.pki.ed25519

class HederaAccount {
    public static initWith(
        accountIDString: string,
        publicKeyHex: string,
        privateKeyHex: string
    ) {
        const accountID = i.accountIDFromString(accountIDString)
        const keypair = new KeyPair(publicKeyHex, privateKeyHex)
        return new HederaAccount(accountID, keypair)
    }

    // Generate ed25519 keypair and initialise new account
    public static init() {
        const seed = forge.random.getBytesSync(32)
        const kp = ed25519.generateKeyPair({ seed })
        const publicKeyBuffer = forge.util.createBuffer(kp.publicKey)
        const publicKeyHex = forge.util.bytesToHex(publicKeyBuffer.data)
        const privateKeyBuffer = forge.util.createBuffer(kp.privateKey)
        const privateKeyHex = forge.util.bytesToHex(privateKeyBuffer.data)
        const keypair = new KeyPair(publicKeyHex, privateKeyHex)
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

    public getKeyPair(): KeyPair | undefined {
        return this.keypair
    }

    public setAccountIDWithString(accountIDString: string) {
        this.accountID = i.accountIDFromString(accountIDString)
    }

    public setKeyPairWithHexString(
        publicKeyHex: string,
        privateKeyHex?: string
    ) {
        this.keypair = new KeyPair(publicKeyHex, privateKeyHex)
    }
}

export default HederaAccount
