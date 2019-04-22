import debug from 'debug'
import grpc from 'grpc'
import { Hedera, HederaAccount, HederaBuilder } from '..'
import { CryptoServiceClient } from '../../pbnode/CryptoService_grpc_pb'
import { Transaction as TransactionNode } from '../../pbnode/Transaction_pb'
import { TransactionResponse } from '../../pbnode/TransactionResponse_pb'
import { Key } from '../../pbweb/BasicTypes_pb'
import HederaNode from '../hederanode'
import i from '../internal'
import { exitIfNotNode, getGenesisKeys } from '../utils'

const log = debug('test')

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

let hedera: Hedera

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
    // instantiate a Hedera client which connects to Hedera network
    // via the given node,
    // with the given payingAccount,
    // which pays and signs for transactions/queries
    hedera = new HederaBuilder(node)
        .withOperator(payingAccount)
        .cryptoCreate(publicKey, initialBalance)
        .sign()
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
    if (genesis === undefined) {
        return
    }
    // since we only have 1 single testnet node in our addressbook at the moment, we can expect
    expect(node.getNetwork()).toBe('testnet')
    expect(node.getHostname()).toBe('35.237.130.140:50211')
    expect(node.getAccountIDAsString()).toBe('0.0.3')
})

test('New HederaAccount has correct values', () => {
    if (genesis === undefined) {
        return
    }
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
    if (genesis === undefined) {
        return
    }

    const operator = hedera!.operator

    expect(node.getAccountID().getRealmnum()).toBe(0)
    expect(node.getAccountID().getShardnum()).toBe(0)
    expect(node.getAccountID().getAccountnum()).toBe(3)
    expect(operator.getAccountID()).toBe(payingAccount.getAccountID())
    expect(operator.getKeyPair()).toBe(payingAccount.getKeyPair())
})

test('Hedera client sends the cryptoCreate transaction', async done => {
    if (genesis === undefined) {
        done()
        return
    }
    const tx = TransactionNode.deserializeBinary(hedera.tx!)
    // const address = node.getHostname()
    const address = 'testnet.hedera.com:50006'
    log('gRPC call to', address)

    const c = new CryptoServiceClient(
        address,
        grpc.credentials.createInsecure()
    )
    const callback = (
        error: grpc.ServiceError | null,
        response: TransactionResponse
    ) => {
        log(error)
        log(response)
        if (response !== undefined) {
            const responseBin = response.serializeBinary()
            const txRes = TransactionResponse.deserializeBinary(responseBin)
            // ResponseCodeEnum
            const responseCode = txRes.getNodetransactionprecheckcode()
            log(i.enumKeyByValue(responseCode))
            log(txRes.toObject())
        }
        done()
    }
    c.createAccount(tx, callback)
}, 30000)

async function cryptoCreatePromise(
    address: string,
    tx: TransactionNode
): Promise<{
    error: grpc.ServiceError | null
    response: TransactionResponse
}> {
    const client = new CryptoServiceClient(
        address,
        grpc.credentials.createInsecure()
    )
    return new Promise((resolve, reject) => {
        client.createAccount(
            tx,
            (
                error: grpc.ServiceError | null,
                response: TransactionResponse
            ) => {
                const result = { error, response }
                if (error) {
                    reject(result)
                } else {
                    resolve(result)
                }
            }
        )
    })
}
