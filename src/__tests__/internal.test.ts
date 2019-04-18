import * as forge from 'node-forge'
import { Signature } from '../../pbweb/BasicTypes_pb'
import i from '../internal'

const ed25519 = forge.pki.ed25519

test('Internal functions', () => {
    const msg = 'hello'
    const seed = forge.random.getBytesSync(32)
    const keypair = ed25519.generateKeyPair({ seed })

    const privateKeyBuffer = forge.util.createBuffer(keypair.privateKey)
    const privateKeyHex = forge.util.bytesToHex(privateKeyBuffer.data)
    expect(privateKeyHex.length).toBe(128)

    const publicKeyBuffer = forge.util.createBuffer(keypair.publicKey)
    const publicKeyHex = forge.util.bytesToHex(publicKeyBuffer.data)
    expect(publicKeyHex.length).toBe(64)

    let sig = i.signWithKeyAndVerify(msg, privateKeyHex, publicKeyHex)
    expect(sig).toBeInstanceOf(Signature)

    expect(() => {
        sig = i.signWithKeyAndVerify(msg, '', publicKeyHex)
    }).toThrowError()
})
