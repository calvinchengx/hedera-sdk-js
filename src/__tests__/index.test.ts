import { Hedera, HederaBuilder } from '..'
import { AccountID } from '../../pbweb/BasicTypes_pb'
import HederaNode from '../hederanode'
import KeyPair from '../keypair'

test('Hedera', () => {

    // instantiate an example account
    const nodeAccountID = new AccountID()
    nodeAccountID.setAccountnum(3)

    // instantiate a Hedera client that can connect to our gRPC services
    const node = new HederaNode('testnet', '35.237.130.140:50211', nodeAccountID)
    const builder = new HederaBuilder(node)

    expect(builder.node.getAccountID().getRealmnum()).toBe(0)
    expect(builder.node.getAccountID().getShardnum()).toBe(0)
    expect(builder.node.getAccountID().getAccountnum()).toBe(3)

    const payingAccountID = new AccountID()
    payingAccountID.setAccountnum(4)
    const keypair = new KeyPair()
    const hedera = builder.withOperator(payingAccountID, keypair).connect()

    expect(hedera.operator.getAccountID()).toBe(payingAccountID)
    expect(hedera.operator.getKeyPair()).toBe(keypair)

})
