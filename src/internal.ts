import nano from 'nano-seconds'
import * as forge from 'node-forge'
import { AccountID, Signature } from '../pbweb/BasicTypes_pb'
import { Duration } from '../pbweb/Duration_pb'
import { Timestamp } from '../pbweb/Timestamp_pb'

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
    message: string,
    privateKeyHex: string,
    publicKeyHex: string
): Sig {
    const encoding = 'binary'
    const privateKey = Buffer.from(
        forge.util.hexToBytes(privateKeyHex),
        encoding
    )
    const publicKey = Buffer.from(forge.util.hexToBytes(publicKeyHex), encoding)

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
}

/**
 * accountIDFromString converts a string type AccountID into a Hedera AccountID object.
 * @param {string} account is a string delimited by dot, of the format 'shardNum.realmNum.accountNum'.
 * @returns {Object} returns a Hedera AccountID.
 */
const accountIDFromString = (account: string): AccountID => {
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

const accountIDAsString = (accountID: AccountID): string => {
    const shardNum = accountID.getShardnum().toString()
    const realmNum = accountID.getRealmnum().toString()
    const accountNum = accountID.getAccountnum().toString()
    return `${shardNum}.${realmNum}.${accountNum}`
}

/**
 * getDuration sets the length of duration the transaction stays in Hedera network
 */
function getDuration(seconds: number = 60) {
    const d = new Duration()
    d.setSeconds(seconds)
    return d
}

function getTimestamp() {
    const ts = new Timestamp()
    const ns = nano.now()
    const secondsInDeci = parseInt(nano.toString(ns), 10) / 1000000000
    const splitSeconds = secondsInDeci.toString().split('.')
    const seconds = parseInt(splitSeconds[0], 10)
    const nanosecond = parseInt(splitSeconds[1], 10)
    ts.setSeconds(seconds)
    ts.setNanos(nanosecond)
    return ts
}

function getFee() {
    return 100000
}

export default {
    accountIDAsString,
    accountIDFromString,
    getDuration,
    getFee,
    getTimestamp,
    signWithKeyAndVerify
}
