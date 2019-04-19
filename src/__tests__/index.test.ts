import { HederaAccount, HederaBuilder } from '..'
import { AccountID } from '../../pbweb/BasicTypes_pb'
import HederaNode from '../hederanode'
import { exitIfNotNode, getGenesisKeys } from '../utils'

test('Hedera', async () => {
    exitIfNotNode()

    const genesis = await getGenesisKeys()
    if (genesis === undefined) {
        // No genesis account and keys were defined in environment variable,
        // so we exit. This test will not run.
        return
    }

    // instantiate an example account
    const nodeAccountID = new AccountID()
    nodeAccountID.setAccountnum(3)

    // instantiate a Hedera client that can connect to our gRPC services
    const node = new HederaNode(
        'testnet',
        '35.237.130.140:50211',
        nodeAccountID
    )

    const payingAccount = HederaAccount.initWith(
        genesis.account,
        genesis.pubKey,
        genesis.privKey,
        true
    )

    const newAccount = HederaAccount.init()
    const keypair = newAccount.getKeyPair()
    const publicKey = keypair!.getPublicKey()
    const initialBalance = 10000

    const hedera = new HederaBuilder(node)
        .withOperator(payingAccount)
        .cryptoCreate(publicKey, initialBalance)
        .sign()

    expect(hedera!.node.getAccountID().getRealmnum()).toBe(0)
    expect(hedera!.node.getAccountID().getShardnum()).toBe(0)
    expect(hedera!.node.getAccountID().getAccountnum()).toBe(3)
    expect(hedera!.operator.getAccountID()).toBe(payingAccount.getAccountID())
    expect(hedera!.operator.getKeyPair()).toBe(payingAccount.getKeyPair())
})
