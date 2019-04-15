import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as QueryHeader_pb from './QueryHeader_pb';
import * as ResponseHeader_pb from './ResponseHeader_pb';

export class CryptoGetAccountBalanceQuery extends jspb.Message {
  getHeader(): QueryHeader_pb.QueryHeader | undefined;
  setHeader(value?: QueryHeader_pb.QueryHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;
  hasAccountid(): boolean;
  clearAccountid(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetAccountBalanceQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetAccountBalanceQuery): CryptoGetAccountBalanceQuery.AsObject;
  static serializeBinaryToWriter(message: CryptoGetAccountBalanceQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetAccountBalanceQuery;
  static deserializeBinaryFromReader(message: CryptoGetAccountBalanceQuery, reader: jspb.BinaryReader): CryptoGetAccountBalanceQuery;
}

export namespace CryptoGetAccountBalanceQuery {
  export type AsObject = {
    header?: QueryHeader_pb.QueryHeader.AsObject,
    accountid?: BasicTypes_pb.AccountID.AsObject,
  }
}

export class CryptoGetAccountBalanceResponse extends jspb.Message {
  getHeader(): ResponseHeader_pb.ResponseHeader | undefined;
  setHeader(value?: ResponseHeader_pb.ResponseHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;
  hasAccountid(): boolean;
  clearAccountid(): void;

  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetAccountBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetAccountBalanceResponse): CryptoGetAccountBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: CryptoGetAccountBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetAccountBalanceResponse;
  static deserializeBinaryFromReader(message: CryptoGetAccountBalanceResponse, reader: jspb.BinaryReader): CryptoGetAccountBalanceResponse;
}

export namespace CryptoGetAccountBalanceResponse {
  export type AsObject = {
    header?: ResponseHeader_pb.ResponseHeader.AsObject,
    accountid?: BasicTypes_pb.AccountID.AsObject,
    balance: number,
  }
}

