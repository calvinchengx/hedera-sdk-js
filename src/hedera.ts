import { AccountID } from '../pbweb/BasicTypes_pb'
import { CryptoServiceClient } from '../pbweb/CryptoService_grpc_web_pb'
import { FileServiceClient } from '../pbweb/FileService_grpc_web_pb'
import { SmartContractServiceClient } from '../pbweb/SmartContractService_grpc_web_pb'
import { HederaBuilder } from './index'
import Operator from './operator'

class Hedera {

  public static micropayment(doc: Document) {
    const tags = doc.getElementsByTagName('hedera-micropayment')
    if (tags.length === 0) {
      return null
    }
  }

  public clientCrypto: CryptoServiceClient
  public clientFile: FileServiceClient
  public clientContract: SmartContractServiceClient
  public nodeAccountID: AccountID
  public nodeHostname: string
  public operator: Operator

  constructor(build: HederaBuilder) {
    this.clientCrypto = build.clientCrypto
    this.clientFile = build.clientFile
    this.clientContract = build.clientContract
    this.nodeAccountID = build.nodeAccountID
    this.nodeHostname = build.nodeHostname
    this.operator = build.operator
  }

}

export default Hedera