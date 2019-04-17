import { AccountID } from '../pbweb/BasicTypes_pb'
import { CryptoServiceClient } from '../pbweb/CryptoService_grpc_web_pb'
import { FileServiceClient } from '../pbweb/FileService_grpc_web_pb'
import { SmartContractServiceClient } from '../pbweb/SmartContractService_grpc_web_pb'
import Hedera from './hedera'
import HederaAccount from './hederaaccount';
import HederaNode from './hederanode';
import KeyPair from './keypair'

class HederaBuilder {

  public clientCrypto: CryptoServiceClient
  public clientFile: FileServiceClient
  public clientContract: SmartContractServiceClient
  public node: HederaNode
  public operator: HederaAccount  // operator refers to the account that pays for transactions and querys

  constructor(node: HederaNode) {
    this.clientCrypto = new CryptoServiceClient(node.getHostname(), null, null)
    this.clientFile = new FileServiceClient(node.getHostname(), null, null)
    this.clientContract = new SmartContractServiceClient(node.getHostname(), null, null)
    this.node = node
    this.operator = new HederaAccount()
  }

  public withOperator(account: AccountID, keypair: KeyPair) {
    this.operator = new HederaAccount(account, keypair)
    return this
  }

  public build() {
    return new Hedera(this)
  }
}

export { HederaBuilder, Hedera, HederaAccount }
