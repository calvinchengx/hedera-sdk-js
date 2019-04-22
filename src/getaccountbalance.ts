import debug from 'debug'
import { AccountID } from '../pbweb/BasicTypes_pb'
import { CryptoGetAccountBalanceQuery } from '../pbweb/CryptoGetAccountBalance_pb'
import { Query } from '../pbweb/Query_pb'
import { ResponseType } from '../pbweb/QueryHeader_pb'
import { QueryHeader } from '../pbweb/QueryHeader_pb'
import cryptoTransfer from './cryptotransfer'
import fees from './fees'
import HederaAccount from './hederaaccount'
import HederaNode from './hederanode'
import IRecipientList from './irecipientlist'

const log = debug('test')
const rt = ResponseType

const getAccountBalance = (
    operator: HederaAccount,
    node: HederaNode,
    account: AccountID,
    memo = '',
    resType = rt.ANSWER_ONLY
): Query => {
    log('getAccountBalance makes a gRPC call to Hedera network')
    if (operator === undefined) {
        // operator (e.g. the current account that's paying)
        throw new Error('Operator not defined')
    }

    const sender = operator.getAccountID()! // operator account that pays
    const recipient = node.getAccountIDAsString() // node account that gets paid
    const recipientList = [
        {
            tinybars: fees().toString(), // the fee that is paid from sender to recipient
            to: recipient
        }
    ] as IRecipientList[]
    const tx = cryptoTransfer(operator, node, sender, recipientList, memo)

    // prepare query header
    const qHeader = new QueryHeader()
    qHeader.setPayment(tx)
    qHeader.setResponsetype(resType)

    // prepare query
    const queryType = new CryptoGetAccountBalanceQuery()
    queryType.setHeader(qHeader)
    queryType.setAccountid(account)
    log('Our cryptoGetAccountBalanceQuery is', queryType.toObject())
    const q = new Query()
    q.setCryptogetaccountbalance(queryType)
    log('Our query, q, is', q.toObject())
    return q
}

export default getAccountBalance
