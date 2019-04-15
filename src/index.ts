import { AccountID } from '../pbweb/BasicTypes_pb'
import { CryptoServiceClient } from '../pbweb/CryptoService_grpc_web_pb'
import { FileServiceClient } from '../pbweb/FileService_grpc_web_pb'
import { SmartContractServiceClient } from '../pbweb/SmartContractService_grpc_web_pb'
import Hedera from './hedera'
import KeyPair from './keypair'
import Operator from './operator'

class HederaBuilder {

  public clientCrypto: CryptoServiceClient
  public clientFile: FileServiceClient
  public clientContract: SmartContractServiceClient
  public nodeAccountID: AccountID
  public nodeHostname: string
  public operator: Operator

  constructor(nodeHostname: string, nodeAccountID: AccountID) {
    this.clientCrypto = new CryptoServiceClient(nodeHostname, null, null)
    this.clientFile = new FileServiceClient(nodeHostname, null, null)
    this.clientContract = new SmartContractServiceClient(nodeHostname, null, null)
    this.nodeAccountID = nodeAccountID
    this.nodeHostname = nodeHostname
    this.operator = new Operator()
  }

  public withOperator(keypair: KeyPair, account: AccountID) {
    this.operator = new Operator(keypair, account)
    return this
  }

  public connect() {
    return new Hedera(this)
  }
}

export { HederaBuilder, Hedera }
