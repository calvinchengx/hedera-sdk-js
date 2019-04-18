// package: proto
// file: Transaction.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as Duration_pb from "./Duration_pb";
import * as BasicTypes_pb from "./BasicTypes_pb";
import * as TransactionBody_pb from "./TransactionBody_pb";

export class Transaction extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): TransactionBody_pb.TransactionBody | undefined;
    setBody(value?: TransactionBody_pb.TransactionBody): void;


    hasBodybytes(): boolean;
    clearBodybytes(): void;
    getBodybytes(): Uint8Array | string;
    getBodybytes_asU8(): Uint8Array;
    getBodybytes_asB64(): string;
    setBodybytes(value: Uint8Array | string): void;


    hasSigs(): boolean;
    clearSigs(): void;
    getSigs(): BasicTypes_pb.SignatureList | undefined;
    setSigs(value?: BasicTypes_pb.SignatureList): void;


    hasSigmap(): boolean;
    clearSigmap(): void;
    getSigmap(): BasicTypes_pb.SignatureMap | undefined;
    setSigmap(value?: BasicTypes_pb.SignatureMap): void;


    getBodyDataCase(): Transaction.BodyDataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        body?: TransactionBody_pb.TransactionBody.AsObject,
        bodybytes: Uint8Array | string,
        sigs?: BasicTypes_pb.SignatureList.AsObject,
        sigmap?: BasicTypes_pb.SignatureMap.AsObject,
    }

    export enum BodyDataCase {
        BODYDATA_NOT_SET = 0,
    
    BODY = 1,

    BODYBYTES = 4,

    }

}
