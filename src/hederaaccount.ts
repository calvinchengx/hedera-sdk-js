
import { AccountID } from '../pbweb/BasicTypes_pb';
import i from './internal'
import KeyPair from './keypair';

class HederaAccount {

  public static init(accountIDString: string, publicKeyHex: string, privateKeyHex: string) {
    const accountID = i.accountIDFromString(accountIDString)
    const keypair = new KeyPair(publicKeyHex, privateKeyHex)
    return new HederaAccount(accountID, keypair)
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

  public getAccountID() : AccountID | undefined {
    return this.accountID
  }

  public getKeyPair() : KeyPair | undefined {
    return this.keypair
  }

  public setAccountIDWithString(accountIDString: string) {
    this.accountID = i.accountIDFromString(accountIDString)
  }

  public setKeyPairWithHexString(publicKeyHex: string, privateKeyHex?: string) {
    this.keypair = new KeyPair(publicKeyHex, privateKeyHex)
  }

}

export default HederaAccount