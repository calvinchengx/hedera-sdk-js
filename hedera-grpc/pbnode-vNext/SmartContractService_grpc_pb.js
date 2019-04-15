// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var TransactionResponse_pb = require('./TransactionResponse_pb.js');
var Query_pb = require('./Query_pb.js');
var Response_pb = require('./Response_pb.js');
var Transaction_pb = require('./Transaction_pb.js');

function serialize_proto_Query(arg) {
  if (!(arg instanceof Query_pb.Query)) {
    throw new Error('Expected argument of type proto.Query');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Query(buffer_arg) {
  return Query_pb.Query.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Response(arg) {
  if (!(arg instanceof Response_pb.Response)) {
    throw new Error('Expected argument of type proto.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Response(buffer_arg) {
  return Response_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Transaction(arg) {
  if (!(arg instanceof Transaction_pb.Transaction)) {
    throw new Error('Expected argument of type proto.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Transaction(buffer_arg) {
  return Transaction_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_TransactionResponse(arg) {
  if (!(arg instanceof TransactionResponse_pb.TransactionResponse)) {
    throw new Error('Expected argument of type proto.TransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_TransactionResponse(buffer_arg) {
  return TransactionResponse_pb.TransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The request and responses for different smart contract services. 
var SmartContractServiceService = exports.SmartContractServiceService = {
  createContract: {
    path: '/proto.SmartContractService/createContract',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Creates a contract by submitting the transaction. The grpc server returns the TransactionResponse
  updateContract: {
    path: '/proto.SmartContractService/updateContract',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Updates a contract with the content by submitting the transaction. The grpc server returns the TransactionResponse
  contractCallMethod: {
    path: '/proto.SmartContractService/contractCallMethod',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Calls a contract by submitting the transaction. The grpc server returns the TransactionResponse
  getContractInfo: {
    path: '/proto.SmartContractService/getContractInfo',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the contract information by submitting the query. The grpc server returns the Response
  contractCallLocalMethod: {
    path: '/proto.SmartContractService/contractCallLocalMethod',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Calls a smart contract by submitting the query. The grpc server returns the Response
  contractGetBytecode: {
    path: '/proto.SmartContractService/ContractGetBytecode',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the byte code of a contract by submitting the query. The grpc server returns the Response
  getBySolidityID: {
    path: '/proto.SmartContractService/getBySolidityID',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves a contract(using Solidity ID) by submitting the query. The grpc server returns the Response
  getTxRecordByContractID: {
    path: '/proto.SmartContractService/getTxRecordByContractID',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves a contract(using contract ID) by submitting the query. The grpc server returns the Response
};

exports.SmartContractServiceClient = grpc.makeGenericClientConstructor(SmartContractServiceService);
