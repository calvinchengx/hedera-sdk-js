import { CryptoServiceClient } from '../pbweb/CryptoService_grpc_web_pb'
import { FileServiceClient } from '../pbweb/FileService_grpc_web_pb'
import { SmartContractServiceClient } from '../pbweb/SmartContractService_grpc_web_pb'
import { AccountID } from '../pbweb/BasicTypes_pb'

class Hedera {

  clientCrypto: CryptoServiceClient
  clientFile: FileServiceClient
  clientContract: SmartContractServiceClient
  nodeAccountID: AccountID
  operator: Operator

  constructor(build: Hedera.Client) {
    this.clientCrypto = build.clientCrypto
    this.clientFile = build.clientFile
    this.clientContract = build.clientContract
    this.nodeAccountID = build.nodeAccountID
    this.operator = build.operator
  }

}

class Operator {
  keypair: string
  account: AccountID
  constructor(keypair: string = "", account: AccountID = new AccountID()) {
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
    operator: Operator

    constructor(address: string, nodeAccountID: AccountID) {
      this.clientCrypto = new CryptoServiceClient(address, null, null)
      this.clientFile = new FileServiceClient(address, null, null)
      this.clientContract = new SmartContractServiceClient(address, null, null)
      this.nodeAccountID = nodeAccountID
      this.operator = new Operator()
    }

    withOperator(keypair: string, account: AccountID) {
      this.operator = new Operator(keypair, account)
      return this
    }

    connect() {
      return new Hedera(this)
    }
  }
}

export default Hedera
