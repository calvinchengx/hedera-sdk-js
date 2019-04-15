import { AccountID } from '../../pbweb/BasicTypes_pb';
import Hedera from '../index'
import KeyPair from '../keypair';

test('Hedera', () => {

    // instantiate an example account
    const nodeAccountID = new AccountID()
    nodeAccountID.setAccountnum(3)

    // instantiate a Hedera client that can connect to our gRPC services
    const client = new Hedera.Client('35.237.130.140:50211', nodeAccountID)

    expect(client.nodeAccountID.getRealmnum()).toBe(0)
    expect(client.nodeAccountID.getShardnum()).toBe(0)
    expect(client.nodeAccountID.getAccountnum()).toBe(3)

    const payingAccountID = new AccountID()
    payingAccountID.setAccountnum(4)
    const keyPair = new KeyPair()
    const hedera = client.withOperator(keyPair, payingAccountID).connect()

    expect(hedera.operator.account).toBe(payingAccountID)
    expect(hedera.operator.keypair).toBe(keyPair)

})
