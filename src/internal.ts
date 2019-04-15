import * as forge from 'node-forge';
import { Signature } from "../pbweb/BasicTypes_pb";

const ed25519 = forge.pki.ed25519

type Sig = Signature | undefined

/**
 * 
 * @param {forge.Bytes} message 
 * @param {string} privateKeyHex 
 * @param {string} publicKeyHex 
 * @returns {Sig}
 */
function signWithKeyAndVerify(message: forge.Bytes, privateKeyHex: string, publicKeyHex: string) : Sig {
  const encoding = 'binary'
  const privateKey = Buffer.from(forge.util.hexToBytes(privateKeyHex), encoding)
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

export default {
  signWithKeyAndVerify
}