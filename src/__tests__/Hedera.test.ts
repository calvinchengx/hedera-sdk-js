import { AccountID } from '../../pbweb/BasicTypes_pb';
import Hedera from '../index'

test('Hedera', () => {

    // instantiate an example account
    const nodeAccountID = new AccountID()
    nodeAccountID.setAccountnum(3)

    // instantiate a Hedera client that can connect to our gRPC services
    const hedera = new Hedera.Client('35.237.130.140:50211', nodeAccountID)

    expect(hedera.nodeAccountID.getRealmnum()).toBe(0)
    expect(hedera.nodeAccountID.getShardnum()).toBe(0)
    expect(hedera.nodeAccountID.getAccountnum()).toBe(3)

})
