import { HederaAccount, HederaBuilder } from '..'
import { Key } from '../../pbweb/BasicTypes_pb'
import HederaNode from '../hederanode'
import { exitIfNotNode, getGenesisKeys } from '../utils'

let genesis:
    | {
          account: string
          asn1: boolean
          privKey: string
          pubKey: string
      }
    | undefined

let node: HederaNode

let payingAccount: HederaAccount

let publicKey: Key

let initialBalance: number

let newAccount: HederaAccount

// set up
beforeAll(async () => {
    exitIfNotNode()
    genesis = await getGenesisKeys()
    // No genesis account and keys were defined in environment variable,
    // so we exit. This test will not run.
    if (genesis === undefined) {
        return
    }
    // instantiate a HederaNode
    node = new HederaNode('testnet')
    // Using our genesis account details, initialise a HederaAccount object which will be our paying account
    payingAccount = HederaAccount.initWith(
        genesis.account,
        genesis.pubKey,
        genesis.privKey,
        true
    )
    // instantiate a new HederaAccount, which we will ask Hedera to create
    // via the cryptoo createAccount gRPC call
    newAccount = HederaAccount.init()
    publicKey = newAccount.getKeyPair()!.getPublicKey()
    initialBalance = 10000
})

test('HederaAccount payingAccount has correct values', () => {
    if (genesis === undefined) {
        return
    }
    expect(payingAccount.getAccountIDAsString()).toBe(genesis.account)
    expect(genesis.asn1).toBe(true)
    // since our genesis keys are ASN.1 DER-encoded,
    // they will not match after internal conversion within HederaAccount class
    if (genesis.asn1 === true) {
        const keypair = payingAccount.getKeyPair()!
        expect(keypair).not.toBeUndefined()
        expect(keypair.getPrivateKeyHex()).not.toBe(genesis.privKey)
        expect(keypair.getPublicKeyHex()).not.toBe(genesis.pubKey)
        expect(keypair.getSeed()).not.toBeUndefined()
        expect(keypair.getSeed()!.length).toBe(32)
    }
})

test('HederaNode has correct values', () => {
    // since we only have 1 single testnet node in our addressbook at the moment, we can expect
    expect(node.getNetwork()).toBe('testnet')
    expect(node.getHostname()).toBe('35.237.130.140:50211')
    expect(node.getAccountIDAsString()).toBe('0.0.3')
})

test('New HederaAccount has correct values', () => {
    // Since our newAccount object is newly initialised and hasn't been sent to Hedera network yet,
    // its AccountID attribute should be undefined
    expect(newAccount.getAccountID()).toBeUndefined()
    // however, its public and private keys are defined (automatically generated)
    const keypair = newAccount.getKeyPair()!
    expect(keypair).toBeDefined()
    expect(keypair.getPublicKeyHex()).toBeDefined()
    expect(keypair.getPrivateKeyHex()).toBeDefined()
    expect(keypair.getSeed()!.length).toBe(32)
})

test('Hedera client has correct values', async () => {
    // instantiate a Hedera client which connects to Hedera network
    // via the given node,
    // with the given payingAccount,
    // which pays and signs for transactions/queries
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
