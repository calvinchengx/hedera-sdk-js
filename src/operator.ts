import { AccountID } from '../pbweb/BasicTypes_pb'
import KeyPair from './keypair'

class Operator {
  public keypair: KeyPair
  public account: AccountID
  constructor(keypair: KeyPair = new KeyPair(), account: AccountID = new AccountID()) {
    this.keypair = keypair
    this.account = account
  }
}

export default Operator