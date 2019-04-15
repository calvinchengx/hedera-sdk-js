import { Hedera, HederaBuilder } from '..'
import { AccountID } from '../../pbweb/BasicTypes_pb'
import KeyPair from '../keypair'

test('Hedera', () => {

    // instantiate an example account
    const nodeAccountID = new AccountID()
    nodeAccountID.setAccountnum(3)

    // instantiate a Hedera client that can connect to our gRPC services
    const builder = new HederaBuilder('35.237.130.140:50211', nodeAccountID)

    expect(builder.nodeAccountID.getRealmnum()).toBe(0)
    expect(builder.nodeAccountID.getShardnum()).toBe(0)
    expect(builder.nodeAccountID.getAccountnum()).toBe(3)

    const payingAccountID = new AccountID()
    payingAccountID.setAccountnum(4)
    const keyPair = new KeyPair()
    const hedera = builder.withOperator(keyPair, payingAccountID).connect()

    expect(hedera.operator.account).toBe(payingAccountID)
    expect(hedera.operator.keypair).toBe(keyPair)

})
