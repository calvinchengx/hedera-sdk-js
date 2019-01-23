// package: proto
// file: HederaService.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as HederaService_pb from "./HederaService_pb";
import * as Transaction_pb from "./Transaction_pb";
import * as TransactionResponse_pb from "./TransactionResponse_pb";
import * as Query_pb from "./Query_pb";
import * as Response_pb from "./Response_pb";

interface IHederaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    submitTransaction: IHederaServiceService_ISubmitTransaction;
    submitQuery: IHederaServiceService_ISubmitQuery;
}

interface IHederaServiceService_ISubmitTransaction extends grpc.MethodDefinition<Transaction_pb.Transaction, TransactionResponse_pb.TransactionResponse> {
    path: string; // "/proto.HederaService/SubmitTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<Transaction_pb.Transaction>;
    requestDeserialize: grpc.deserialize<Transaction_pb.Transaction>;
    responseSerialize: grpc.serialize<TransactionResponse_pb.TransactionResponse>;
    responseDeserialize: grpc.deserialize<TransactionResponse_pb.TransactionResponse>;
}
interface IHederaServiceService_ISubmitQuery extends grpc.MethodDefinition<Query_pb.Query, Response_pb.Response> {
    path: string; // "/proto.HederaService/SubmitQuery"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<Query_pb.Query>;
    requestDeserialize: grpc.deserialize<Query_pb.Query>;
    responseSerialize: grpc.serialize<Response_pb.Response>;
    responseDeserialize: grpc.deserialize<Response_pb.Response>;
}

export const HederaServiceService: IHederaServiceService;

export interface IHederaServiceServer {
    submitTransaction: grpc.handleUnaryCall<Transaction_pb.Transaction, TransactionResponse_pb.TransactionResponse>;
    submitQuery: grpc.handleUnaryCall<Query_pb.Query, Response_pb.Response>;
}

export interface IHederaServiceClient {
    submitTransaction(request: Transaction_pb.Transaction, callback: (error: grpc.ServiceError | null, response: TransactionResponse_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    submitTransaction(request: Transaction_pb.Transaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: TransactionResponse_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    submitTransaction(request: Transaction_pb.Transaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: TransactionResponse_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    submitQuery(request: Query_pb.Query, callback: (error: grpc.ServiceError | null, response: Response_pb.Response) => void): grpc.ClientUnaryCall;
    submitQuery(request: Query_pb.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Response_pb.Response) => void): grpc.ClientUnaryCall;
    submitQuery(request: Query_pb.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Response_pb.Response) => void): grpc.ClientUnaryCall;
}

export class HederaServiceClient extends grpc.Client implements IHederaServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public submitTransaction(request: Transaction_pb.Transaction, callback: (error: grpc.ServiceError | null, response: TransactionResponse_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: Transaction_pb.Transaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: TransactionResponse_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: Transaction_pb.Transaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: TransactionResponse_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public submitQuery(request: Query_pb.Query, callback: (error: grpc.ServiceError | null, response: Response_pb.Response) => void): grpc.ClientUnaryCall;
    public submitQuery(request: Query_pb.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Response_pb.Response) => void): grpc.ClientUnaryCall;
    public submitQuery(request: Query_pb.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Response_pb.Response) => void): grpc.ClientUnaryCall;
}
