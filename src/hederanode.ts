import { AccountID } from '../pbweb/BasicTypes_pb'
import data from './addressbook/addressbook.json'
import i from './internal'

class HederaNode {
    private network: string
    private hostname: string
    private accountID: AccountID

    constructor(network: string, hostname?: string, accountID?: AccountID) {
        this.network = network
        if (hostname === undefined || accountID === undefined) {
            // assign random node
            const { accountIDRandom, hostnameRandom } = this.randomNode()
            this.hostname = hostnameRandom
            this.accountID = accountIDRandom
        } else {
            // rely on the provided hostname and accountID
            this.hostname = hostname
            this.accountID = accountID
        }
    }

    public getNetwork() {
        return this.network
    }

    public getHostname(): string {
        return this.hostname
    }

    public getAccountID(): AccountID {
        return this.accountID
    }

    public getAccountIDAsString(): string {
        return i.accountIDAsString(this.accountID)
    }

    private randomNode() {
        const addressbook = data as any
        const nodes = addressbook[this.network]
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
        const accountIDString = Object.keys(randomNode)[0]
        const accountIDArray = accountIDString.split('.')
        const accountIDRandom = new AccountID()
        accountIDRandom.setRealmnum(parseInt(accountIDArray[0], 10))
        accountIDRandom.setShardnum(parseInt(accountIDArray[1], 10))
        accountIDRandom.setAccountnum(parseInt(accountIDArray[2], 10))
        const hostnameRandom = randomNode[accountIDString]
        return { accountIDRandom, hostnameRandom }
    }
}

export default HederaNode
