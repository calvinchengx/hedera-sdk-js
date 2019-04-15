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


// The request and responses for different crypto services. 
var CryptoServiceService = exports.CryptoServiceService = {
  createAccount: {
    path: '/proto.CryptoService/createAccount',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Creates a new account by submitting the transaction. The grpc server returns the TransactionResponse
  updateAccount: {
    path: '/proto.CryptoService/updateAccount',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Updates an account by submitting the transaction. The grpc server returns the TransactionResponse
  cryptoTransfer: {
    path: '/proto.CryptoService/cryptoTransfer',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Initiates a transfer by submitting the transaction. The grpc server returns the TransactionResponse
  cryptoDelete: {
    path: '/proto.CryptoService/cryptoDelete',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Deletes and account by submitting the transaction. The grpc server returns the TransactionResponse
  addClaim: {
    path: '/proto.CryptoService/addClaim',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Adds a claim by submitting the transaction. The grpc server returns the TransactionResponse
  deleteClaim: {
    path: '/proto.CryptoService/deleteClaim',
    requestStream: false,
    responseStream: false,
    requestType: Transaction_pb.Transaction,
    responseType: TransactionResponse_pb.TransactionResponse,
    requestSerialize: serialize_proto_Transaction,
    requestDeserialize: deserialize_proto_Transaction,
    responseSerialize: serialize_proto_TransactionResponse,
    responseDeserialize: deserialize_proto_TransactionResponse,
  },
  // Deletes a claim by submitting the transaction. The grpc server returns the TransactionResponse
  getClaim: {
    path: '/proto.CryptoService/getClaim',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the claim for an account by submitting the query.
  getAccountRecords: {
    path: '/proto.CryptoService/getAccountRecords',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the record(fetch by AccountID ID) for an account by submitting the query.
  cryptoGetBalance: {
    path: '/proto.CryptoService/cryptoGetBalance',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the balance for an account by submitting the query.
  getAccountInfo: {
    path: '/proto.CryptoService/getAccountInfo',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the account information for an account by submitting the query.
  getTransactionReceipts: {
    path: '/proto.CryptoService/getTransactionReceipts',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the transaction receipts for an account by TxId which last for 180sec only for no fee.
  getFastTransactionRecord: {
    path: '/proto.CryptoService/getFastTransactionRecord',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the transaction record by TxID which last for 180sec only for no fee.
  getTxRecordByTxID: {
    path: '/proto.CryptoService/getTxRecordByTxID',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the transactions record(fetch by Transaction ID) for an account by submitting the query.
  getStakersByAccountID: {
    path: '/proto.CryptoService/getStakersByAccountID',
    requestStream: false,
    responseStream: false,
    requestType: Query_pb.Query,
    responseType: Response_pb.Response,
    requestSerialize: serialize_proto_Query,
    requestDeserialize: deserialize_proto_Query,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
  // Retrieves the stakers for a node by account ID by submitting the query.
};

exports.CryptoServiceClient = grpc.makeGenericClientConstructor(CryptoServiceService);
