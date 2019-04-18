import * as forge from 'node-forge'
import { AccountID, Signature } from '../pbweb/BasicTypes_pb'

const ed25519 = forge.pki.ed25519

type Sig = Signature | undefined

/**
 *
 * @param {forge.Bytes} message
 * @param {string} privateKeyHex
 * @param {string} publicKeyHex
 * @returns {Sig}
 */
function signWithKeyAndVerify(
    message: forge.Bytes,
    privateKeyHex: string,
    publicKeyHex: string
): Sig {
    const encoding = 'binary'
    const privateKey = Buffer.from(
        forge.util.hexToBytes(privateKeyHex),
        encoding
    )
    const publicKey = Buffer.from(forge.util.hexToBytes(publicKeyHex), encoding)
    try {
        const signature = ed25519.sign({
            encoding,
            message,
            privateKey
        })
        const verified = ed25519.verify({
            encoding,
            message,
            publicKey,
            signature
        })
        if (verified !== true) {
            return undefined
        }
        const sig = new Signature()
        sig.setEd25519(signature)
        return sig
    } catch (e) {
        throw e
    }
}

/**
 * accountIDFromString converts a string type AccountID into a Hedera AccountID object.
 * @param {string} account is a string delimited by dot, of the format 'shardNum.realmNum.accountNum'.
 * @returns {Object} returns a Hedera AccountID.
 */
function accountIDFromString(account: string): AccountID {
    const accountSplit = account.split('.')
    if (accountSplit.length !== 3) {
        throw new Error(
            'AccountID string must be of the form realmNum.shardNum.accountNum'
        )
    }

    const accountID = new AccountID()

    if (
        isNaN(parseInt(accountSplit[0], 10)) ||
        isNaN(parseInt(accountSplit[1], 10)) ||
        isNaN(parseInt(accountSplit[2], 10))
    ) {
        throw new Error('AccountID contains invalid character(s)')
    }
    if (accountSplit.length !== 3) {
        throw new Error('AccountID is invalid')
    }
    accountID.setShardnum(parseInt(accountSplit[0], 10))
    accountID.setRealmnum(parseInt(accountSplit[1], 10))
    accountID.setAccountnum(parseInt(accountSplit[2], 10))
    return accountID
}

export default {
    accountIDFromString,
    signWithKeyAndVerify
}
