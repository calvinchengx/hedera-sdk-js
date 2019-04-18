import grpc from 'grpc'
import { AccountID } from '../pbweb/BasicTypes_pb'
import ClientNode from './clientnode';
import ClientWeb from './clientweb';
import Hedera from './hedera'
import HederaAccount from './hederaaccount';
import HederaNode from './hederanode';
import KeyPair from './keypair'


class HederaBuilder {

  public clientWeb: ClientWeb
  public clientNode: ClientNode

  public node: HederaNode
  public operator: HederaAccount  // operator refers to the account that pays for transactions and querys

  constructor(node: HederaNode) {
    this.clientWeb = new ClientWeb(node.getHostname(), null, null)                                 // gRPC web javascript
    this.clientNode = new ClientNode(node.getHostname(), grpc.credentials.createInsecure(), null)  // gRPC nodejs
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

export { HederaBuilder, Hedera, HederaAccount, HederaNode }
