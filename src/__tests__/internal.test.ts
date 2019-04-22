import * as forge from 'node-forge'
import { Key, Signature } from '../../pbweb/BasicTypes_pb'
import { CryptoCreateTransactionBody } from '../../pbweb/CryptoCreate_pb'
import { TransactionBody } from '../../pbweb/TransactionBody_pb'
import i from '../internal'

const ed25519 = forge.pki.ed25519

test('Sanity check: ed25519 from node-forge', () => {
    const message = Buffer.from('hello').toString()
    const seed = forge.random.getBytesSync(32)
    const keypair = ed25519.generateKeyPair({ seed })
    const privateKey = keypair.privateKey
    const publicKey = keypair.publicKey
    const encoding = 'binary'

    expect(privateKey.length).toBe(64)
    expect(publicKey.length).toBe(32)

    const signature = ed25519.sign({ message, encoding, privateKey })
    const verify = ed25519.verify({ message, encoding, signature, publicKey })

    expect(verify).toBeTruthy()
})

test('Sanity check: compatibility with protobuf', () => {
    const seed = forge.random.getBytesSync(32)
    const keypair = ed25519.generateKeyPair({ seed })
    const publicKey = keypair.publicKey

    const key = new Key()
    key.setEd25519(publicKey)

    const body = new CryptoCreateTransactionBody()
    body.setKey(key)

    const txBody = new TransactionBody()
    txBody.setCryptocreateaccount(body)

    const txBodyBytes = txBody.serializeBinary()
    // console.log(txBodyBytes)
})

test('Sanity check: conversion between hex and bytes', () => {
    const seed = forge.random.getBytesSync(32)
    const keypair = ed25519.generateKeyPair({ seed })
    const privateKey = keypair.privateKey
    const publicKey = keypair.publicKey

    // converting NativeBuffer into bytes
    const privateKeyBytes = forge.util.createBuffer(privateKey, 'raw')
    const publicKeyBytes = forge.util.createBuffer(publicKey, 'raw')
    expect(privateKeyBytes.length()).toBe(64)
    expect(publicKeyBytes.length()).toBe(32)

    // converting bytes into hex-string
    const privateKeyHex = forge.util.bytesToHex(privateKeyBytes.getBytes())
    const publicKeyHex = forge.util.bytesToHex(publicKeyBytes.getBytes())
    expect(privateKeyHex.length).toBe(128)
    expect(publicKeyHex.length).toBe(64)

    // converting hex-string into bytes
    const privBytes = forge.util.hexToBytes(privateKeyHex)
    const pubBytes = forge.util.hexToBytes(publicKeyHex)
    expect(privBytes.length).toBe(64)
    expect(pubBytes.length).toBe(32)

    // converting bytes into NativeBuffer
    const pubNativeBuffer = Buffer.from(pubBytes, 'binary')

    const hederaPublicKey = new Key()
    hederaPublicKey.setEd25519(pubNativeBuffer)

    const body = new CryptoCreateTransactionBody()
    body.setKey(hederaPublicKey)

    const txBody = new TransactionBody()
    txBody.setCryptocreateaccount(body)

    // serialize binary will fail if we do not use NativeBuffer-type to set our Key
    txBody.serializeBinary()

    expect(pubNativeBuffer).toEqual(publicKey)
})

test('signWithKeyAndVerify', () => {
    const seed = forge.random.getBytesSync(32)
    const keypair = ed25519.generateKeyPair({ seed })
    const privateKey = keypair.privateKey
    const publicKey = keypair.publicKey

    // converting NativeBuffer into bytes
    const privateKeyBytes = forge.util.createBuffer(privateKey, 'raw')
    const publicKeyBytes = forge.util.createBuffer(publicKey, 'raw')
    expect(privateKeyBytes.length()).toBe(64)
    expect(publicKeyBytes.length()).toBe(32)

    // converting bytes into hex-string
    const privateKeyHex = forge.util.bytesToHex(privateKeyBytes.getBytes())
    const publicKeyHex = forge.util.bytesToHex(publicKeyBytes.getBytes())
    expect(privateKeyHex.length).toBe(128)
    expect(publicKeyHex.length).toBe(64)

    const message = 'hello'

    let sig = i.signWithKeyAndVerify(message, privateKeyHex, publicKeyHex)
    expect(sig).toBeInstanceOf(Signature)

    expect(() => {
        sig = i.signWithKeyAndVerify(message, '', publicKeyHex)
    }).toThrowError()
})

// const privateKeyBuffer = forge.util.createBuffer(keypair.privateKey)
// const privateKeyHex = forge.util.bytesToHex(privateKeyBuffer.data)
// expect(privateKeyHex.length).toBe(128)

// const publicKeyBuffer = forge.util.createBuffer(keypair.publicKey)
// const publicKeyHex = forge.util.bytesToHex(publicKeyBuffer.data)
// expect(publicKeyHex.length).toBe(64)

// let sig = i.signWithKeyAndVerify(msg, privateKeyHex, publicKeyHex)
// expect(sig).toBeInstanceOf(Signature)

// expect(() => {
//     sig = i.signWithKeyAndVerify(msg, '', publicKeyHex)
// }).toThrowError()

test('Duration', () => {
    const d = i.getDuration()
    expect(d.getSeconds()).toBe(60)
})
