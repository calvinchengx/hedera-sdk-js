// package: proto
// file: UpdateFeeSchedule.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as BasicTypes_pb from "./BasicTypes_pb";

export class UpdateFeeScheduleTransactionBody extends jspb.Message { 
    clearTransactionfeescheduleList(): void;
    getTransactionfeescheduleList(): Array<BasicTypes_pb.TransactionFeeSchedule>;
    setTransactionfeescheduleList(value: Array<BasicTypes_pb.TransactionFeeSchedule>): void;
    addTransactionfeeschedule(value?: BasicTypes_pb.TransactionFeeSchedule, index?: number): BasicTypes_pb.TransactionFeeSchedule;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFeeScheduleTransactionBody.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFeeScheduleTransactionBody): UpdateFeeScheduleTransactionBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFeeScheduleTransactionBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFeeScheduleTransactionBody;
    static deserializeBinaryFromReader(message: UpdateFeeScheduleTransactionBody, reader: jspb.BinaryReader): UpdateFeeScheduleTransactionBody;
}

export namespace UpdateFeeScheduleTransactionBody {
    export type AsObject = {
        transactionfeescheduleList: Array<BasicTypes_pb.TransactionFeeSchedule.AsObject>,
    }
}
