// package: proto
// file: GetFeeSchedule.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as BasicTypes_pb from "./BasicTypes_pb";
import * as QueryHeader_pb from "./QueryHeader_pb";
import * as ResponseHeader_pb from "./ResponseHeader_pb";

export class GetFeeScheduleQuery extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): QueryHeader_pb.QueryHeader | undefined;
    setHeader(value?: QueryHeader_pb.QueryHeader): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeeScheduleQuery.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeeScheduleQuery): GetFeeScheduleQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeeScheduleQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeeScheduleQuery;
    static deserializeBinaryFromReader(message: GetFeeScheduleQuery, reader: jspb.BinaryReader): GetFeeScheduleQuery;
}

export namespace GetFeeScheduleQuery {
    export type AsObject = {
        header?: QueryHeader_pb.QueryHeader.AsObject,
    }
}

export class GetFeeScheduleResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): ResponseHeader_pb.ResponseHeader | undefined;
    setHeader(value?: ResponseHeader_pb.ResponseHeader): void;


    hasFeeschedule(): boolean;
    clearFeeschedule(): void;
    getFeeschedule(): BasicTypes_pb.FeeSchedule | undefined;
    setFeeschedule(value?: BasicTypes_pb.FeeSchedule): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeeScheduleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeeScheduleResponse): GetFeeScheduleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeeScheduleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeeScheduleResponse;
    static deserializeBinaryFromReader(message: GetFeeScheduleResponse, reader: jspb.BinaryReader): GetFeeScheduleResponse;
}

export namespace GetFeeScheduleResponse {
    export type AsObject = {
        header?: ResponseHeader_pb.ResponseHeader.AsObject,
        feeschedule?: BasicTypes_pb.FeeSchedule.AsObject,
    }
}
