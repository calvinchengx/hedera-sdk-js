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

    // instantiate a HederaNode
    const node = new HederaNode('testnet')

    // since we only have 1 single testnet node in our addressbook at the moment, we can expect
    expect(node.getNetwork()).toBe('testnet')
    expect(node.getHostname()).toBe('35.237.130.140:50211')
    expect(node.getAccountIDAsString()).toBe('0.0.3')

    // Using our genesis account details, initialise a HederaAccount object which will be our paying account
    const payingAccount = HederaAccount.initWith(
        genesis.account,
        genesis.pubKey,
        genesis.privKey,
        true
    )

    // instantiate a new HederaAccount, which we will ask Hedera to create
    const newAccount = HederaAccount.init()
    const keypair = newAccount.getKeyPair()
    const publicKey = keypair!.getPublicKey()
    const initialBalance = 10000

    // instantiate a Hedera client which connects to Hedera network 
    // via the given node,
    // which pays and signs for transactions and queries with the given payingAccount
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
