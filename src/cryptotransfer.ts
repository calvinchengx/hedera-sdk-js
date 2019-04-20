import { CryptoTransferTransactionBody, TransferList } from '../pbweb/CryptoTransfer_pb'


function cryptoTransfer(transferList: TransferList) {
    // const transferList = new TransferList()
    // transferList.add

    const body = new CryptoTransferTransactionBody()
    body.setTransfers(transferList)
}

interface IRecipient {
    to: string,
    tinybars: string
}

/**
 * setRecipientTransferLists prepares the transferList
 * @param {string} sender refers to the sending account. It is a string delimited by dot, of the format 'shardNum.realmNum.accountNum'.
 * @param {IRecipient} recipientList refers to the list of accounts receiving the payment. It consists of the amount and accountID of receiver.
 */
const setRecipientTransferLists = (sender: string, recipientList: IRecipient[]) =>{
    if (recipientList.length === 0) {
        // no recipients for cryptotransfer
        throw new Error("No recipients for cryptotransfer")
    }

    for (const recipient in recipientList) {
        //

    }

    const transferList = new TransferList()
    // let finalList = []
    // let totalDeducted = 0
    // for (var k in recipientList) {
    //     // user[k] = recipientList[k];
    //     let xAcctAmtRecipient = new AccountAmount()
    //     xAcctAmtRecipient.setAccountid(i.accountIDFromString(recipientList[k].to))
    //     xAcctAmtRecipient.setAmount(parseInt(recipientList[k].tinybars))
    //     console.log("xAcctAmtRecipient", xAcctAmtRecipient)
    //     finalList.push(xAcctAmtRecipient)

    //     totalDeducted += parseInt(recipientList[k].tinybars)

    // }
    // // Last in the list will be the sender
    // console.log("totalDeducted", totalDeducted)
    // let acctAmtSender = new AccountAmount()
    // acctAmtSender.setAccountid(i.accountIDFromString(sender))
    // acctAmtSender.setAmount(-totalDeducted)
    // finalList.push(acctAmtSender)

    // console.log("listOfRecipients", finalList)
    // transferList.setAccountamountsList(finalList)
    return transferList
}

const sum = (a: number, b: number) => {
    return a + b
}

export default cryptoTransfer
