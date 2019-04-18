import {
    CryptoServiceClient,
    CryptoServicePromiseClient
} from '../pbweb/CryptoService_grpc_web_pb'
import {
    FileServiceClient,
    FileServicePromiseClient
} from '../pbweb/FileService_grpc_web_pb'
import {
    SmartContractServiceClient,
    SmartContractServicePromiseClient
} from '../pbweb/SmartContractService_grpc_web_pb'

class ClientWeb {
    public crypto: CryptoServiceClient
    public cryptoAsync: CryptoServicePromiseClient

    public file: FileServiceClient
    public fileAsync: FileServicePromiseClient

    public contract: SmartContractServiceClient
    public contractAsync: SmartContractServicePromiseClient

    constructor(
        hostname: string,
        credentials: { [index: string]: string } | null = null,
        options?: any
    ) {
        this.crypto = new CryptoServiceClient(hostname, credentials, options)
        this.cryptoAsync = new CryptoServicePromiseClient(
            hostname,
            credentials,
            options
        )
        this.file = new FileServiceClient(hostname, credentials, options)
        this.fileAsync = new FileServicePromiseClient(
            hostname,
            credentials,
            options
        )
        this.contract = new SmartContractServiceClient(
            hostname,
            credentials,
            options
        )
        this.contractAsync = new SmartContractServicePromiseClient(
            hostname,
            credentials,
            options
        )
    }
}

export default ClientWeb
