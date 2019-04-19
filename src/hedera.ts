import grpc from 'grpc'
import { Query } from '../pbweb/Query_pb'
import { Transaction, TransactionBody } from '../pbweb/Transaction_pb'
import { TransactionResponse } from '../pbweb/TransactionResponse_pb'
import ClientNode from './clientnode'
import ClientWeb from './clientweb'
import HederaAccount from './hederaaccount'
import HederaNode from './hederanode'
import { HederaBuilder } from './index'

type TxCase = TransactionBody.DataCase | undefined
type QCase = Query.QueryCase | undefined
enum Mode {
    Web = 1,
    Node
}

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

    private txCase?: TxCase
    private tx?: Transaction

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

    // by default, we make our gRPC call with grpc-node (2), not grpc-web (1)
    public send(mode: Mode = Mode.Node) {
        if (this.txCase !== undefined) {
            this.handleTransaction(mode)
        }
        if (this.qCase !== undefined) {
            this.handleQuery(mode)
        }
    }

    private handleTransaction(mode: Mode) {
        switch (this.txCase) {
            case TransactionBody.DataCase.CRYPTOCREATEACCOUNT:
                this.clientNode.crypto.createAccount(
                    this.tx,
                    (
                        err: grpc.ServiceError | null,
                        res: TransactionResponse
                    ) => {
                        // console.log(err)
                        // console.log(res)
                    }
                )
            case TransactionBody.DataCase.CRYPTOTRANSFER:
            case TransactionBody.DataCase.CONTRACTCALL:
            default:
        }
    }

    private handleQuery(mode: Mode) {
        switch (this.qCase) {
            case Query.QueryCase.CRYPTOGETACCOUNTBALANCE:
            case Query.QueryCase.TRANSACTIONGETRECEIPT:
            default:
        }
    }
}

export default Hedera
