// nodejs or web, returns true if we are in nodejs environment
const isNode = () => {
  let node = false
  if (typeof process === 'object') {
      if (typeof process.versions === 'object') {
          if (typeof process.versions.node !== 'undefined') {
              node = true
          }
      }
  }
  return node
}

const exitIfNotNode = () => {
  if (isNode() === false) {
      return
  }
}

const getGenesisKeys = async () => {
  if (isNode() === false) {
      return undefined
  }

  if (
      process.env.GENESIS_ACCOUNT_ID !== undefined &&
      process.env.GENESIS_PRIVATE_KEY &&
      process.env.GENESIS_PUBLIC_KEY &&
      process.env.GENESIS_ASN1
  ) {
      const asn1 =
          process.env.GENESIS_ASN1.toLowerCase() === 'true' ? true : false
      return {
          account: process.env.GENESIS_ACCOUNT_ID,
          asn1,
          privKey: process.env.GENESIS_PRIVATE_KEY,
          pubKey: process.env.GENESIS_PUBLIC_KEY
      }
  } else {
      return undefined
  }
}

export {
  getGenesisKeys,
  exitIfNotNode
}