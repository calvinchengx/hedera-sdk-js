import * as grpcWeb from 'grpc-web';
import {
  Query,
  Response,
  Transaction,
  TransactionResponse} from './FileService_pb';

export class FileServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  createFile(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  updateFile(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  deleteFile(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  appendContent(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  getFileContent(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  getFileInfo(
    request: Query,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream;

  adminDelete(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

  adminUndelete(
    request: Transaction,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TransactionResponse) => void
  ): grpcWeb.ClientReadableStream;

}

