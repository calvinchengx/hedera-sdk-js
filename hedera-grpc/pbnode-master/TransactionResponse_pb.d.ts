// package: proto
// file: TransactionResponse.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as ResponseCode_pb from "./ResponseCode_pb";

export class TransactionResponse extends jspb.Message { 
    getNodetransactionprecheckcode(): ResponseCode_pb.ResponseCodeEnum;
    setNodetransactionprecheckcode(value: ResponseCode_pb.ResponseCodeEnum): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionResponse): TransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionResponse;
    static deserializeBinaryFromReader(message: TransactionResponse, reader: jspb.BinaryReader): TransactionResponse;
}

export namespace TransactionResponse {
    export type AsObject = {
        nodetransactionprecheckcode: ResponseCode_pb.ResponseCodeEnum,
    }
}
