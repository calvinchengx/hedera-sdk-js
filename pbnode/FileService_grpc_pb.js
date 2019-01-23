// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var Query_pb = require('./Query_pb.js');
var Response_pb = require('./Response_pb.js');
var TransactionResponse_pb = require('./TransactionResponse_pb.js');
var Transaction_pb = require('./Transaction_pb.js');

function serialize_proto_Query(arg) {
  if (!(arg instanceof Query_pb.Query)) {
    throw new Error('Expected argument of type proto.Query');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_Query(buffer_arg) {
  return Query_pb.Query.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Response(arg) {
  if (!(arg instanceof Response_pb.Response)) {
    throw new Error('Expected argument of type proto.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_Response(buffer_arg) {
  return Response_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Transaction(arg) {
  if (!(arg instanceof Transaction_pb.Transaction)) {
    throw new Error('Expected argument of type proto.Transaction');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_Transaction(buffer_arg) {
  return Transaction_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_TransactionResponse(arg) {
  if (!(arg instanceof TransactionResponse_pb.TransactionResponse)) {
    throw new Error('Expected argument of type proto.TransactionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_TransactionResponse(buffer_arg) {
  return TransactionResponse_pb.TransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The request and responses for different file services. 
var FileServiceService = exports.FileServiceService = {
  createFile: {
    path: '/proto.FileService/createFile',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Creates a file with the content by submitting the transaction. The grpc server returns the TransactionResponse
  updateFile: {
    path: '/proto.FileService/updateFile',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Updates a file by submitting the transaction. The grpc server returns the TransactionResponse
  deleteFile: {
    path: '/proto.FileService/deleteFile',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Deletes a file by submitting the transaction. The grpc server returns the TransactionResponse
  appendContent: {
    path: '/proto.FileService/appendContent',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Appends the file contents(for a given FileID) by submitting the transaction. The grpc server returns the TransactionResponse
  getFileContent: {
    path: '/proto.FileService/getFileContent',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the file content by submitting the query. The grpc server returns the Response
  getFileInfo: {
    path: '/proto.FileService/getFileInfo',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the file information by submitting the query. The grpc server returns the Response
  adminDelete: {
    path: '/proto.FileService/adminDelete',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Deletes a file by submitting the transaction when the account has admin privileges on the file. The grpc server returns the TransactionResponse
  adminUndelete: {
    path: '/proto.FileService/adminUndelete',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // UnDeletes a file by submitting the transaction when the account has admin privileges on the file. The grpc server returns the TransactionResponse
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
