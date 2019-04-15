import * as jspb from "google-protobuf"

import * as ResponseCode_pb from './ResponseCode_pb';

export class TransactionResponse extends jspb.Message {
  getNodetransactionprecheckcode(): ResponseCode_pb.ResponseCodeEnum;
  setNodetransactionprecheckcode(value: ResponseCode_pb.ResponseCodeEnum): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionResponse): TransactionResponse.AsObject;
  static serializeBinaryToWriter(message: TransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionResponse;
  static deserializeBinaryFromReader(message: TransactionResponse, reader: jspb.BinaryReader): TransactionResponse;
}

export namespace TransactionResponse {
  export type AsObject = {
    nodetransactionprecheckcode: ResponseCode_pb.ResponseCodeEnum,
  }
}

