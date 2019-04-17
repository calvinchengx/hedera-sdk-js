import { AccountID } from '../pbweb/BasicTypes_pb'
import { CryptoServiceClient } from '../pbweb/CryptoService_grpc_web_pb'
import { FileServiceClient } from '../pbweb/FileService_grpc_web_pb'
import { SmartContractServiceClient } from '../pbweb/SmartContractService_grpc_web_pb'
import HederaAccount from './hederaaccount';
import HederaNode from './hederanode';
import { HederaBuilder } from './index'

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
  public node: HederaNode
  public operator: HederaAccount

  constructor(build: HederaBuilder) {
    this.clientCrypto = build.clientCrypto
    this.clientFile = build.clientFile
    this.clientContract = build.clientContract
    this.node = build.node
    this.operator = build.operator
  }

}

export default Hedera