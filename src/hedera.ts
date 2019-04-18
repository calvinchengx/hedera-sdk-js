import ClientNode from './clientnode'
import ClientWeb from './clientweb'
import HederaAccount from './hederaaccount'
import HederaNode from './hederanode'
import { HederaBuilder } from './index'

class Hedera {
    public static micropayment(doc: Document) {
        const tags = doc.getElementsByTagName('hedera-micropayment')
        if (tags.length === 0) {
            return null
        }
    }

    public clientWeb: ClientWeb
    public clientNode: ClientNode
    public node: HederaNode
    public operator: HederaAccount

    constructor(build: HederaBuilder) {
        this.clientWeb = build.clientWeb
        this.clientNode = build.clientNode
        this.node = build.node
        this.operator = build.operator
    }
}

export default Hedera
