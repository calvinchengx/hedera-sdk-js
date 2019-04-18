import { AccountID } from '../pbweb/BasicTypes_pb'
import data from './addressbook/addressbook.json'

class HederaNode {
    public network: string
    private hostname?: string
    private accountID?: AccountID

    constructor(network: string, hostname?: string, accountID?: AccountID) {
        this.network = network
        this.hostname = hostname
        this.accountID = accountID
    }

    public getHostname(): string {
        if (this.hostname === undefined) {
            this.randomNode()
        }
        return this.hostname!
    }

    public getAccountID(): AccountID {
        if (this.accountID === undefined) {
            this.randomNode()
        }
        return this.accountID!
    }

    private randomNode() {
        const addressbook = data as any
        const nodes = addressbook[this.network]
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
        const accountIDString = Object.keys(randomNode)[0]
        const accountIDArray = accountIDString.split('.')
        const accountID = new AccountID()
        accountID.setRealmnum(parseInt(accountIDArray[0], 10))
        accountID.setShardnum(parseInt(accountIDArray[1], 10))
        accountID.setAccountnum(parseInt(accountIDArray[2], 10))
        this.accountID = accountID
        const hostname = randomNode[accountIDString]
        this.hostname = hostname
    }

    // public getAccountID() {

    // }
}

export default HederaNode
