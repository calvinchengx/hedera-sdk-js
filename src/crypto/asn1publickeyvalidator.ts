import { Class, Tag } from '@fidm/asn1'

const publicKeyValidator = {
  name: 'SubjectPublicKeyInfo',
  // tslint:disable-next-line:object-literal-sort-keys
  class: Class.UNIVERSAL,
  tag: Tag.SEQUENCE,
  // tslint:disable-next-line:object-literal-sort-keys
  capture: 'subjectPublicKeyInfo',
  value: [
      {
          name: 'SubjectPublicKeyInfo.AlgorithmIdentifier',
          // tslint:disable-next-line:object-literal-sort-keys
          class: Class.UNIVERSAL,
          tag: Tag.SEQUENCE,
          value: [
              {
                  name: 'AlgorithmIdentifier.algorithm',
                  // tslint:disable-next-line:object-literal-sort-keys
                  class: Class.UNIVERSAL,
                  tag: Tag.OID,
                  // tslint:disable-next-line:object-literal-sort-keys
                  capture: 'publicKeyOID'
              }
          ]
      },
      {
          // subjectPublicKey
          name: 'SubjectPublicKeyInfo.subjectPublicKey',
          // tslint:disable-next-line:object-literal-sort-keys
          class: Class.UNIVERSAL,
          tag: Tag.BITSTRING,
          capture: 'publicKey'
      }
  ]
}

export default publicKeyValidator