import forge from 'node-forge'
import KeyPair from '../keypair'

const ed25519 = forge.pki.ed25519

test('KeyPair', () => {
    const seed = forge.random.getBytesSync(32)
    const seedBuffer = Buffer.from(seed, 'binary')
    const kp = ed25519.generateKeyPair({ seed })
    const publicKeyBuffer = forge.util.createBuffer(kp.publicKey)
    const publicKeyHex = forge.util.bytesToHex(publicKeyBuffer.data)
    const privateKeyBuffer = forge.util.createBuffer(kp.privateKey)
    const privateKeyHex = forge.util.bytesToHex(privateKeyBuffer.data)
    const keypair = new KeyPair(publicKeyHex, privateKeyHex, false, seedBuffer)
    expect(keypair.getSeed()!.length).toBe(32)
})
