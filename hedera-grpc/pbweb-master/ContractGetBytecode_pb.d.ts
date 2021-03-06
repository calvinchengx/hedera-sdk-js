import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as QueryHeader_pb from './QueryHeader_pb';
import * as ResponseHeader_pb from './ResponseHeader_pb';

export class ContractGetBytecodeQuery extends jspb.Message {
  getHeader(): QueryHeader_pb.QueryHeader | undefined;
  setHeader(value?: QueryHeader_pb.QueryHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getContractid(): BasicTypes_pb.ContractID | undefined;
  setContractid(value?: BasicTypes_pb.ContractID): void;
  hasContractid(): boolean;
  clearContractid(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractGetBytecodeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ContractGetBytecodeQuery): ContractGetBytecodeQuery.AsObject;
  static serializeBinaryToWriter(message: ContractGetBytecodeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractGetBytecodeQuery;
  static deserializeBinaryFromReader(message: ContractGetBytecodeQuery, reader: jspb.BinaryReader): ContractGetBytecodeQuery;
}

export namespace ContractGetBytecodeQuery {
  export type AsObject = {
    header?: QueryHeader_pb.QueryHeader.AsObject,
    contractid?: BasicTypes_pb.ContractID.AsObject,
  }
}

export class ContractGetBytecodeResponse extends jspb.Message {
  getHeader(): ResponseHeader_pb.ResponseHeader | undefined;
  setHeader(value?: ResponseHeader_pb.ResponseHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getBytecode(): Uint8Array | string;
  getBytecode_asU8(): Uint8Array;
  getBytecode_asB64(): string;
  setBytecode(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractGetBytecodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContractGetBytecodeResponse): ContractGetBytecodeResponse.AsObject;
  static serializeBinaryToWriter(message: ContractGetBytecodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractGetBytecodeResponse;
  static deserializeBinaryFromReader(message: ContractGetBytecodeResponse, reader: jspb.BinaryReader): ContractGetBytecodeResponse;
}

export namespace ContractGetBytecodeResponse {
  export type AsObject = {
    header?: ResponseHeader_pb.ResponseHeader.AsObject,
    bytecode: Uint8Array | string,
  }
}

