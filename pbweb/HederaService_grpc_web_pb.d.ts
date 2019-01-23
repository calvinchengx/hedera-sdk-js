import * as grpcWeb from 'grpc-web';
import {
  Query,
  Response,
  Transaction,
  TransactionResponse} from './HederaService_pb';

export class HederaServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  submitTransaction(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  submitQuery(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

}

