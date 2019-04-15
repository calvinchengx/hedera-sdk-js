import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as QueryHeader_pb from './QueryHeader_pb';
import * as ResponseHeader_pb from './ResponseHeader_pb';
import * as CryptoAddClaim_pb from './CryptoAddClaim_pb';

export class GetByKeyQuery extends jspb.Message {
  getHeader(): QueryHeader_pb.QueryHeader | undefined;
  setHeader(value?: QueryHeader_pb.QueryHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getKey(): BasicTypes_pb.Key | undefined;
  setKey(value?: BasicTypes_pb.Key): void;
  hasKey(): boolean;
  clearKey(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByKeyQuery.AsObject;
  static toObject(includeInstance: boolean, msg: GetByKeyQuery): GetByKeyQuery.AsObject;
  static serializeBinaryToWriter(message: GetByKeyQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByKeyQuery;
  static deserializeBinaryFromReader(message: GetByKeyQuery, reader: jspb.BinaryReader): GetByKeyQuery;
}

export namespace GetByKeyQuery {
  export type AsObject = {
    header?: QueryHeader_pb.QueryHeader.AsObject,
    key?: BasicTypes_pb.Key.AsObject,
  }
}

export class EntityID extends jspb.Message {
  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;
  hasAccountid(): boolean;
  clearAccountid(): void;
  hasAccountid(): boolean;

  getClaim(): CryptoAddClaim_pb.Claim | undefined;
  setClaim(value?: CryptoAddClaim_pb.Claim): void;
  hasClaim(): boolean;
  clearClaim(): void;
  hasClaim(): boolean;

  getFileid(): BasicTypes_pb.FileID | undefined;
  setFileid(value?: BasicTypes_pb.FileID): void;
  hasFileid(): boolean;
  clearFileid(): void;
  hasFileid(): boolean;

  getContractid(): BasicTypes_pb.ContractID | undefined;
  setContractid(value?: BasicTypes_pb.ContractID): void;
  hasContractid(): boolean;
  clearContractid(): void;
  hasContractid(): boolean;

  getEntityCase(): EntityID.EntityCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityID.AsObject;
  static toObject(includeInstance: boolean, msg: EntityID): EntityID.AsObject;
  static serializeBinaryToWriter(message: EntityID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityID;
  static deserializeBinaryFromReader(message: EntityID, reader: jspb.BinaryReader): EntityID;
}

export namespace EntityID {
  export type AsObject = {
    accountid?: BasicTypes_pb.AccountID.AsObject,
    claim?: CryptoAddClaim_pb.Claim.AsObject,
    fileid?: BasicTypes_pb.FileID.AsObject,
    contractid?: BasicTypes_pb.ContractID.AsObject,
  }

  export enum EntityCase { 
    ENTITY_NOT_SET = 0,
    ACCOUNTID = 1,
    CLAIM = 2,
    FILEID = 3,
    CONTRACTID = 4,
  }
}

export class GetByKeyResponse extends jspb.Message {
  getHeader(): ResponseHeader_pb.ResponseHeader | undefined;
  setHeader(value?: ResponseHeader_pb.ResponseHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getEntitiesList(): Array<EntityID>;
  setEntitiesList(value: Array<EntityID>): void;
  clearEntitiesList(): void;
  addEntities(value?: EntityID, index?: number): EntityID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetByKeyResponse): GetByKeyResponse.AsObject;
  static serializeBinaryToWriter(message: GetByKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByKeyResponse;
  static deserializeBinaryFromReader(message: GetByKeyResponse, reader: jspb.BinaryReader): GetByKeyResponse;
}

export namespace GetByKeyResponse {
  export type AsObject = {
    header?: ResponseHeader_pb.ResponseHeader.AsObject,
    entitiesList: Array<EntityID.AsObject>,
  }
}

