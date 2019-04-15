import { CryptoServiceClient } from '../pbweb/CryptoService_grpc_web_pb'
import { FileServiceClient } from '../pbweb/FileService_grpc_web_pb'
import { SmartContractServiceClient } from '../pbweb/SmartContractService_grpc_web_pb'
import { AccountID } from '../pbweb/BasicTypes_pb'
import KeyPair from './keypair'

class Hedera {

  clientCrypto: CryptoServiceClient
  clientFile: FileServiceClient
  clientContract: SmartContractServiceClient
  nodeAccountID: AccountID
  nodeHostname: string
  operator: Operator

  constructor(build: Hedera.Client) {
    this.clientCrypto = build.clientCrypto
    this.clientFile = build.clientFile
    this.clientContract = build.clientContract
    this.nodeAccountID = build.nodeAccountID
    this.nodeHostname = build.nodeHostname
    this.operator = build.operator
  }

}

class Operator {
  keypair: KeyPair
  account: AccountID
  constructor(keypair: KeyPair = new KeyPair(), account: AccountID = new AccountID()) {
    this.keypair = keypair
    this.account = account
  }
}

namespace Hedera {
  export class Client {

    clientCrypto: CryptoServiceClient
    clientFile: FileServiceClient
    clientContract: SmartContractServiceClient
    nodeAccountID: AccountID
    nodeHostname: string
    operator: Operator

    constructor(nodeHostname: string, nodeAccountID: AccountID) {
      this.clientCrypto = new CryptoServiceClient(nodeHostname, null, null)
      this.clientFile = new FileServiceClient(nodeHostname, null, null)
      this.clientContract = new SmartContractServiceClient(nodeHostname, null, null)
      this.nodeAccountID = nodeAccountID
      this.nodeHostname = nodeHostname
      this.operator = new Operator()
    }

    withOperator(keypair: KeyPair, account: AccountID) {
      this.operator = new Operator(keypair, account)
      return this
    }

    connect() {
      return new Hedera(this)
    }
  }
}

export default Hedera
