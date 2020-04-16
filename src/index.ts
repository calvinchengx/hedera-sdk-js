import debug from 'debug'
// import grpc from 'grpc'
// import util from 'util'
// import { SignatureList } from '../pbweb/BasicTypes_pb'
// import {
//     Key,
//     Signature,
//     SignatureMap,
//     SignaturePair,
//     TransactionID
// } from '../pbweb/BasicTypes_pb'
// import { CryptoCreateTransactionBody } from '../pbweb/CryptoCreate_pb'
// import { Duration } from '../pbweb/Duration_pb'
// import { Query } from '../pbweb/Query_pb'
// import { Transaction } from '../pbweb/Transaction_pb'
// import { TransactionBody } from '../pbweb/TransactionBody_pb'
// import ClientNode from './clientnode'
// import ClientWeb from './clientweb'
// import cryptoCreate from './cryptocreate'
// import Hedera from './hedera'
// import HederaAccount from './hederaaccount'
// import HederaNode from './hederanode'
// import i from './internal'

const log = debug('all')
// type TxCase = TransactionBody.DataCase | undefined
// type QCase = Query.QueryCase | undefined

// class HederaBuilder {
//     public clientWeb: ClientWeb
//     public clientNode: ClientNode

//     public node: HederaNode
//     public operator?: HederaAccount // operator refers to the account that pays for transactions and querys

//     // for transactions
//     private memo: string = ''
//     private body?: CryptoCreateTransactionBody
//     private txCase?: TxCase
//     private tx?: Uint8Array

//     // for queries
//     private qCase?: QCase
//     private q?: Query

//     constructor(node: HederaNode) {
//         // grpc-web
//         this.clientWeb = new ClientWeb(node.getHostname(), null, null) // gRPC web javascript
//         // grpc-node
//         this.clientNode = new ClientNode(
//             node.getHostname(),
//             grpc.credentials.createInsecure(),
//             null
//         )
//         this.node = node
//     }

//     public withOperator(hederaAccount: HederaAccount): HederaBuilder {
//         this.operator = hederaAccount
//         return this
//     }

//     public cryptoCreate(
//         publicKey: Key,
//         initialBalance: number,
//         duration: Duration = i.getDuration()
//     ): HederaBuilder {
//         const body = cryptoCreate(publicKey, initialBalance, duration)
//         this.body = body
//         this.txCase = TransactionBody.DataCase.CRYPTOCREATEACCOUNT
//         return this
//     }

//     public withMemo(memo: string): HederaBuilder {
//         this.memo = memo
//         return this
//     }

//     public sign(): Hedera {
//         if (this.operator === undefined) {
//             throw new Error(
//                 'Please specify an operator, i.e. a paying account, using withOperator method'
//             )
//         }
//         if (this.txCase === undefined && this.qCase === undefined) {
//             throw new Error(
//                 'Please invoke either a transaction method or query method before signing'
//             )
//         }
//         // sign a transaction
//         if (this.txCase !== undefined) {
//             switch (this.txCase) {
//                 case TransactionBody.DataCase.CRYPTOCREATEACCOUNT:
//                     const body = this.body
//                     const txID = new TransactionID()
//                     txID.setAccountid(this.operator.getAccountID())
//                     txID.setTransactionvalidstart(i.getTimestamp())
//                     const txBody = new TransactionBody()
//                     txBody.setTransactionid(txID)
//                     txBody.setTransactionfee(i.getFee())
//                     txBody.setCryptocreateaccount(body)
//                     txBody.setMemo(this.memo)
//                     txBody.setNodeaccountid(this.node.getAccountID())

//                     // sign
//                     const txBodyBytes = txBody.serializeBinary().toString()
//                     const privateKeyHex = this.operator
//                         .getKeyPair()!
//                         .getPrivateKeyHex()
//                     const publicKeyHex = this.operator
//                         .getKeyPair()!
//                         .getPublicKeyHex()
//                     const sig = i.signWithKeyAndVerify(
//                         txBodyBytes,
//                         privateKeyHex,
//                         publicKeyHex
//                     ) as Signature

//                     const sigList = new SignatureList()
//                     sigList.setSigsList([sig, sig])

//                     const sigPair = new SignaturePair()
//                     sigPair.setEd25519(sig.getEd25519())

//                     const sigMap = new SignatureMap()
//                     sigMap.addSigpair(sigPair)
//                     // sigMap.addSigpair(sigPair)

//                     const tx = new Transaction()
//                     tx.setBody(txBody)
//                     tx.setSigmap(sigMap)
//                     // tx.setSigs(sigList)
//                     log(
//                         util.inspect(tx.toObject(), {
//                             showHidden: false,
//                             depth: null
//                         })
//                     )
//                     this.tx = tx.serializeBinary()
//                 case TransactionBody.DataCase.CRYPTOTRANSFER:
//                 // TODO
//                 case TransactionBody.DataCase.CONTRACTCALL:
//                 // TODO
//                 default:
//                 // do nothing
//             }
//             return new Hedera(this)
//         }
//         // sign a query
//         if (this.qCase !== undefined) {
//             return new Hedera(this)
//         }
//         throw new Error('Failed to sign')
//     }

//     public getTxCase(): TxCase | undefined {
//         return this.txCase
//     }

//     public getTx(): Uint8Array | undefined {
//         return this.tx
//     }

//     public getQCase(): QCase | undefined {
//         return this.qCase
//     }

//     public getQ(): Query | undefined {
//         return this.q
//     }
// }

// export { HederaBuilder, Hedera, HederaAccount, HederaNode }

class Hedera {
    public static sanityCheck() {
      console.log('Just to check that we are doing things correctly 2')
    }
  }

export { Hedera }
