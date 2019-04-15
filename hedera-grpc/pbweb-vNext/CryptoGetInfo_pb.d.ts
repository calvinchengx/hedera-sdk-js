import * as jspb from "google-protobuf"

import * as Timestamp_pb from './Timestamp_pb';
import * as Duration_pb from './Duration_pb';
import * as BasicTypes_pb from './BasicTypes_pb';
import * as QueryHeader_pb from './QueryHeader_pb';
import * as ResponseHeader_pb from './ResponseHeader_pb';
import * as CryptoAddClaim_pb from './CryptoAddClaim_pb';

export class CryptoGetInfoQuery extends jspb.Message {
  getHeader(): QueryHeader_pb.QueryHeader | undefined;
  setHeader(value?: QueryHeader_pb.QueryHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;
  hasAccountid(): boolean;
  clearAccountid(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetInfoQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetInfoQuery): CryptoGetInfoQuery.AsObject;
  static serializeBinaryToWriter(message: CryptoGetInfoQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetInfoQuery;
  static deserializeBinaryFromReader(message: CryptoGetInfoQuery, reader: jspb.BinaryReader): CryptoGetInfoQuery;
}

export namespace CryptoGetInfoQuery {
  export type AsObject = {
    header?: QueryHeader_pb.QueryHeader.AsObject,
    accountid?: BasicTypes_pb.AccountID.AsObject,
  }
}

export class CryptoGetInfoResponse extends jspb.Message {
  getHeader(): ResponseHeader_pb.ResponseHeader | undefined;
  setHeader(value?: ResponseHeader_pb.ResponseHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getAccountinfo(): CryptoGetInfoResponse.AccountInfo | undefined;
  setAccountinfo(value?: CryptoGetInfoResponse.AccountInfo): void;
  hasAccountinfo(): boolean;
  clearAccountinfo(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetInfoResponse): CryptoGetInfoResponse.AsObject;
  static serializeBinaryToWriter(message: CryptoGetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetInfoResponse;
  static deserializeBinaryFromReader(message: CryptoGetInfoResponse, reader: jspb.BinaryReader): CryptoGetInfoResponse;
}

export namespace CryptoGetInfoResponse {
  export type AsObject = {
    header?: ResponseHeader_pb.ResponseHeader.AsObject,
    accountinfo?: CryptoGetInfoResponse.AccountInfo.AsObject,
  }

  export class AccountInfo extends jspb.Message {
    getAccountid(): BasicTypes_pb.AccountID | undefined;
    setAccountid(value?: BasicTypes_pb.AccountID): void;
    hasAccountid(): boolean;
    clearAccountid(): void;

    getContractaccountid(): string;
    setContractaccountid(value: string): void;

    getDeleted(): boolean;
    setDeleted(value: boolean): void;

    getProxyaccountid(): BasicTypes_pb.AccountID | undefined;
    setProxyaccountid(value?: BasicTypes_pb.AccountID): void;
    hasProxyaccountid(): boolean;
    clearProxyaccountid(): void;

    getProxyreceived(): number;
    setProxyreceived(value: number): void;

    getKey(): BasicTypes_pb.Key | undefined;
    setKey(value?: BasicTypes_pb.Key): void;
    hasKey(): boolean;
    clearKey(): void;

    getBalance(): number;
    setBalance(value: number): void;

    getGeneratesendrecordthreshold(): number;
    setGeneratesendrecordthreshold(value: number): void;

    getGeneratereceiverecordthreshold(): number;
    setGeneratereceiverecordthreshold(value: number): void;

    getReceiversigrequired(): boolean;
    setReceiversigrequired(value: boolean): void;

    getExpirationtime(): Timestamp_pb.Timestamp | undefined;
    setExpirationtime(value?: Timestamp_pb.Timestamp): void;
    hasExpirationtime(): boolean;
    clearExpirationtime(): void;

    getAutorenewperiod(): Duration_pb.Duration | undefined;
    setAutorenewperiod(value?: Duration_pb.Duration): void;
    hasAutorenewperiod(): boolean;
    clearAutorenewperiod(): void;

    getClaimsList(): Array<CryptoAddClaim_pb.Claim>;
    setClaimsList(value: Array<CryptoAddClaim_pb.Claim>): void;
    clearClaimsList(): void;
    addClaims(value?: CryptoAddClaim_pb.Claim, index?: number): CryptoAddClaim_pb.Claim;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountInfo.AsObject;
    static toObject(includeInstance: boolean, msg: AccountInfo): AccountInfo.AsObject;
    static serializeBinaryToWriter(message: AccountInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountInfo;
    static deserializeBinaryFromReader(message: AccountInfo, reader: jspb.BinaryReader): AccountInfo;
  }

  export namespace AccountInfo {
    export type AsObject = {
      accountid?: BasicTypes_pb.AccountID.AsObject,
      contractaccountid: string,
      deleted: boolean,
      proxyaccountid?: BasicTypes_pb.AccountID.AsObject,
      proxyreceived: number,
      key?: BasicTypes_pb.Key.AsObject,
      balance: number,
      generatesendrecordthreshold: number,
      generatereceiverecordthreshold: number,
      receiversigrequired: boolean,
      expirationtime?: Timestamp_pb.Timestamp.AsObject,
      autorenewperiod?: Duration_pb.Duration.AsObject,
      claimsList: Array<CryptoAddClaim_pb.Claim.AsObject>,
    }
  }

}

