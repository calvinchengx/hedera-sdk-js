import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as Duration_pb from './Duration_pb';
import * as Timestamp_pb from './Timestamp_pb';

export class CryptoUpdateTransactionBody extends jspb.Message {
  getAccountidtoupdate(): BasicTypes_pb.AccountID | undefined;
  setAccountidtoupdate(value?: BasicTypes_pb.AccountID): void;
  hasAccountidtoupdate(): boolean;
  clearAccountidtoupdate(): void;

  getKey(): BasicTypes_pb.Key | undefined;
  setKey(value?: BasicTypes_pb.Key): void;
  hasKey(): boolean;
  clearKey(): void;

  getProxyaccountid(): BasicTypes_pb.AccountID | undefined;
  setProxyaccountid(value?: BasicTypes_pb.AccountID): void;
  hasProxyaccountid(): boolean;
  clearProxyaccountid(): void;

  getProxyfraction(): number;
  setProxyfraction(value: number): void;

  getSendrecordthreshold(): number;
  setSendrecordthreshold(value: number): void;

  getReceiverecordthreshold(): number;
  setReceiverecordthreshold(value: number): void;

  getAutorenewperiod(): Duration_pb.Duration | undefined;
  setAutorenewperiod(value?: Duration_pb.Duration): void;
  hasAutorenewperiod(): boolean;
  clearAutorenewperiod(): void;

  getExpirationtime(): Timestamp_pb.Timestamp | undefined;
  setExpirationtime(value?: Timestamp_pb.Timestamp): void;
  hasExpirationtime(): boolean;
  clearExpirationtime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoUpdateTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoUpdateTransactionBody): CryptoUpdateTransactionBody.AsObject;
  static serializeBinaryToWriter(message: CryptoUpdateTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoUpdateTransactionBody;
  static deserializeBinaryFromReader(message: CryptoUpdateTransactionBody, reader: jspb.BinaryReader): CryptoUpdateTransactionBody;
}

export namespace CryptoUpdateTransactionBody {
  export type AsObject = {
    accountidtoupdate?: BasicTypes_pb.AccountID.AsObject,
    key?: BasicTypes_pb.Key.AsObject,
    proxyaccountid?: BasicTypes_pb.AccountID.AsObject,
    proxyfraction: number,
    sendrecordthreshold: number,
    receiverecordthreshold: number,
    autorenewperiod?: Duration_pb.Duration.AsObject,
    expirationtime?: Timestamp_pb.Timestamp.AsObject,
  }
}

