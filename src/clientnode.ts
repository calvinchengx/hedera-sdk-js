import grpc, { ChannelCredentials } from 'grpc'
import { CryptoServiceClient } from '../pbnode/CryptoService_grpc_pb'
import { FileServiceClient } from '../pbnode/FileService_grpc_pb'
import { SmartContractServiceClient } from '../pbnode/SmartContractService_grpc_pb'

class ClientNode {
    public crypto: any
    public file: any
    public contract: any

    constructor(
        address: string,
        credentials: ChannelCredentials = grpc.credentials.createInsecure(),
        options?: any
    ) {
        this.crypto = new CryptoServiceClient(address, credentials, options)
        this.file = new FileServiceClient(address, credentials, options)
        this.contract = new SmartContractServiceClient(
            address,
            credentials,
            options
        )
    }
}

export default ClientNode
