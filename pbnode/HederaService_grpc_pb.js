// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var Transaction_pb = require('./Transaction_pb.js');
var TransactionResponse_pb = require('./TransactionResponse_pb.js');
var Query_pb = require('./Query_pb.js');
var Response_pb = require('./Response_pb.js');

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


var HederaServiceService = exports.HederaServiceService = {
  submitTransaction: {
    path: '/proto.HederaService/SubmitTransaction',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Query and Response (alternative 1)
  //
  submitQuery: {
    path: '/proto.HederaService/SubmitQuery',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
};

exports.HederaServiceClient = grpc.makeGenericClientConstructor(HederaServiceService);
// Transaction and TransactionResponse
