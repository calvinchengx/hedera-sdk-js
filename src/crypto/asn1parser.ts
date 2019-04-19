import { ASN1, BitString } from '@fidm/asn1'
import privateKeyValidator from './asn1privatekeyvalidator'
import publicKeyValidator from './asn1publickeyvalidator'

const asn1parser = (privNativeBuffer: Buffer, pubNativeBuffer: Buffer) => {
  const captures = ASN1.parseDERWithTemplate(
      privNativeBuffer,
      privateKeyValidator
  )
  const capturesLen = captures.privateKey.value.length as number
  if (capturesLen !== 34) {
      throw new Error(
          `We expect the captured ed25519 private key to have an additional 2 \
          bytes 0x04 prepended, so length is 32 + 2 (34), but our length is ${capturesLen}`
      )
  }
  let privKeyBuffer = captures.privateKey.value as Buffer
  privKeyBuffer = privKeyBuffer.slice(2)
  if (privKeyBuffer.byteLength !== 32) {
      throw new Error(`We expect our actual ed25519 private key buffer to be 32 bytes \
      but your private key buffer byte length is ${privKeyBuffer.byteLength}`)
  }
  // public key
  const pubCaptures = ASN1.parseDERWithTemplate(
      pubNativeBuffer,
      publicKeyValidator
  )
  const pubKeyBitString = pubCaptures.publicKey.value as BitString
  const pubKeyBuffer = pubKeyBitString.buf
  if (pubKeyBuffer.length !== 32) {
      throw new Error(`We expect our ed25519 public key buffer to be 32 bytes \
      but your public key buffer byte length is ${pubKeyBuffer.length}`)
  }

  return {
      privKeyBuffer,
      pubKeyBuffer
  }
}

export default asn1parser