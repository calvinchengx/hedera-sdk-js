import debug from 'debug'
import util from 'util'
import { AccountID, SignatureList, TransactionID } from '../pbweb/BasicTypes_pb'
import {
    AccountAmount,
    CryptoTransferTransactionBody,
    TransferList
} from '../pbweb/CryptoTransfer_pb'
import { Transaction } from '../pbweb/Transaction_pb'
import { TransactionBody } from '../pbweb/TransactionBody_pb'
import fees from './fees'
import HederaAccount from './hederaaccount'
import HederaNode from './hederanode'
import i from './internal'
import IRecipientList from './irecipientlist'

const log = debug('test')

const cryptoTransfer = (
    operator: HederaAccount,
    node: HederaNode,
    sender: AccountID,
    recipientList: IRecipientList[],
    memo: string = '',
    record: boolean = false,
    fee: number = fees()
): Transaction => {
    log(`Recipient List ${recipientList}`)
    log('sender', sender)
    log('recipientList', recipientList)
    log('fee', fee)

    const transferList = setRecipientTransferLists(sender, recipientList)

    const body = new CryptoTransferTransactionBody()
    body.setTransfers(transferList)
    const txID = new TransactionID()
    txID.setAccountid(sender)
    txID.setTransactionvalidstart(i.getTimestamp())

    log(`The fee is ${fee}`)
    const txBody = new TransactionBody()
    txBody.setTransactionid(txID)
    txBody.setTransactionfee(fee)
    txBody.setTransactionvalidduration(i.getDuration())
    txBody.setGeneraterecord(true)
    txBody.setCryptotransfer(body)
    txBody.setNodeaccountid(node.getAccountID())
    txBody.setMemo(memo)
    txBody.setGeneraterecord(record)

    // sign
    const txBodyBytes = txBody.serializeBinary().toString()
    const keypair = operator.getKeyPair()!
    const privateKeyHex = keypair.getPrivateKeyHex()
    const publicKeyHex = keypair.getPublicKeyHex()
    const sig = i.signWithKeyAndVerify(
        txBodyBytes,
        privateKeyHex,
        publicKeyHex
    )!

    const sigList = new SignatureList()
    sigList.setSigsList([sig, sig])

    const tx = new Transaction()
    tx.setBody(txBody)
    tx.setSigs(sigList)
    log(util.inspect(tx.toObject(), { showHidden: false, depth: null }))
    return tx
}

const setRecipientTransferLists = (
    sender: AccountID,
    recipientList: IRecipientList[]
) => {
    if (recipientList.length === 0) {
        // no recipients for cryptotransfer
        throw new Error('No recipients for cryptotransfer')
    }

    const transferList = new TransferList()
    const finalList = []
    let totalDeducted = 0
    for (const k in recipientList) {
        if (recipientList.hasOwnProperty(k)) {
            const accountAmountRecipient = new AccountAmount()
            accountAmountRecipient.setAccountid(
                i.accountIDFromString(recipientList[k].to)
            )
            accountAmountRecipient.setAmount(
                parseInt(recipientList[k].tinybars, 10)
            )
            finalList.push(accountAmountRecipient)
            totalDeducted += parseInt(recipientList[k].tinybars, 10)
        }
    }

    // Last in the list will be the sender
    log('totalDeducted', totalDeducted)
    const acctAmtSender = new AccountAmount()
    acctAmtSender.setAccountid(sender)
    acctAmtSender.setAmount(-totalDeducted)
    finalList.push(acctAmtSender)

    log('listOfRecipients', finalList)
    transferList.setAccountamountsList(finalList)
    return transferList
}

export default cryptoTransfer
