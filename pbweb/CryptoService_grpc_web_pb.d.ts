import * as grpcWeb from 'grpc-web';
import {
  Query,
  Response,
  Transaction,
  TransactionResponse} from './CryptoService_pb';

export class CryptoServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  createAccount(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  updateAccount(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  cryptoTransfer(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  cryptoDelete(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  addClaim(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  deleteClaim(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  getClaim(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  getAccountRecords(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  cryptoGetBalance(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  getAccountInfo(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  getTransactionReceipts(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  getFastTransactionRecord(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  getTxRecordByTxID(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  getStakersByAccountID(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

}

