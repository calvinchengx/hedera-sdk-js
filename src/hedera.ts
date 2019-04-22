import debug from 'debug'
import grpc from 'grpc'
import { Transaction as TransactionNode } from '../pbnode/Transaction_pb'
import { Query } from '../pbweb/Query_pb'
import { Transaction } from '../pbweb/Transaction_pb'
import { TransactionBody } from '../pbweb/TransactionBody_pb'
import { TransactionResponse } from '../pbweb/TransactionResponse_pb'
import ClientNode from './clientnode'
import ClientWeb from './clientweb'
import HederaAccount from './hederaaccount'
import HederaNode from './hederanode'
import { HederaBuilder } from './index'

const log = debug('test')
type TxCase = TransactionBody.DataCase | undefined
type QCase = Query.QueryCase | undefined

class Hedera {
    public static micropayment(doc: Document) {
        const tags = doc.getElementsByTagName('hedera-micropayment')
        if (tags.length === 0) {
            return null
        }
    }

    public clientWeb: ClientWeb
    public clientNode: ClientNode
    public node: HederaNode
    public operator: HederaAccount
    public tx?: Uint8Array
    public txCase?: TxCase

    private qCase?: QCase
    private q?: Query

    constructor(build: HederaBuilder) {
        this.clientWeb = build.clientWeb
        this.clientNode = build.clientNode
        this.node = build.node
        this.operator = build.operator!
        this.txCase = build.getTxCase()
        this.tx = build.getTx()
        this.qCase = build.getQCase()
        this.q = build.getQ()
    }

    /**
     * Send our gRPC call as grpc-node or grpc-web
     * @param {string} mode - either 'web' or 'node'. 'node' by default
     */
    public async send(mode: string = 'node') {
        if (this.txCase === undefined && this.qCase === undefined) {
            throw new Error('No transaction or query method invoked')
        }
        if (this.txCase !== undefined) {
            await this.handleTransaction(mode)
        }
        if (this.qCase !== undefined) {
            await this.handleQuery(mode)
        }
    }

    private async handleTransaction(mode: string) {
        // defaults to using clientNode
        let client: ClientWeb | ClientNode = this.clientNode
        let tx:
            | Transaction
            | TransactionNode = TransactionNode.deserializeBinary(this.tx!)
        if (mode === 'web') {
            client = this.clientWeb
            tx = Transaction.deserializeBinary(this.tx!)
        }
        switch (this.txCase) {
            case TransactionBody.DataCase.CRYPTOCREATEACCOUNT:
                log('Crypto Create Account')
                await client.crypto.createAccount(
                    tx,
                    (
                        err: grpc.ServiceError | null,
                        res: TransactionResponse
                    ) => {
                        log('Crypto Create Account callback')
                        log(err)
                        log(res)
                    }
                )
            case TransactionBody.DataCase.CRYPTOTRANSFER:
            case TransactionBody.DataCase.CONTRACTCALL:
            default:
        }
    }

    private async handleQuery(mode: string) {
        // defaults to using clientNode
        let client: ClientWeb | ClientNode = this.clientNode
        if (mode === 'web') {
            client = this.clientWeb
        }
        switch (this.qCase) {
            case Query.QueryCase.CRYPTOGETACCOUNTBALANCE:
                client.crypto.cryptoGetBalance()
            case Query.QueryCase.TRANSACTIONGETRECEIPT:
            default:
        }
    }
}

export default Hedera
