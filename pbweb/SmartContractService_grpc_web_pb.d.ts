import * as grpcWeb from 'grpc-web';
import {
  Query,
  Response,
  Transaction,
  TransactionResponse} from './SmartContractService_pb';

export class SmartContractServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  createContract(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  updateContract(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  contractCallMethod(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  getContractInfo(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  contractCallLocalMethod(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  contractGetBytecode(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  getBySolidityID(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  getTxRecordByContractID(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

}

