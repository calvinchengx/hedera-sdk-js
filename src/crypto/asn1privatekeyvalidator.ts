import { Class, Tag } from '@fidm/asn1'

const privateKeyValidator = {
    name: 'PrivateKeyInfo',
    // tslint:disable-next-line:object-literal-sort-keys
    class: Class.UNIVERSAL,
    tag: Tag.SEQUENCE,
    capture: 'privateKeyInfo',
    value: [
        {
            name: 'PrivateKeyInfo.Version',
            // tslint:disable-next-line:object-literal-sort-keys
            class: Class.UNIVERSAL,
            tag: Tag.INTEGER,
            capture: 'privateKeyVersion'
        },
        {
            name: 'PrivateKeyInfo.AlgorithmIdentifier',
            // tslint:disable-next-line:object-literal-sort-keys
            class: Class.UNIVERSAL,
            tag: Tag.SEQUENCE,
            value: [
                {
                    name: 'PrivateKeyAlgorithmIdentifier.algorithm',
                    // tslint:disable-next-line:object-literal-sort-keys
                    class: Class.UNIVERSAL,
                    tag: Tag.OID,
                    capture: 'privateKeyOID'
                }
            ]
        },
        {
            name: 'PrivateKeyInfo.PrivateKey',
            // tslint:disable-next-line:object-literal-sort-keys
            class: Class.UNIVERSAL,
            tag: Tag.OCTETSTRING,
            capture: 'privateKey'
        }
    ]
}

export default privateKeyValidator
