/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var TransactionResponse_pb = require('./TransactionResponse_pb.js')

var Query_pb = require('./Query_pb.js')

var Response_pb = require('./Response_pb.js')

var Transaction_pb = require('./Transaction_pb.js')
const proto = {};
proto.proto = require('./SmartContractService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.SmartContractServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.SmartContractServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.proto.SmartContractServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.proto.SmartContractServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Transaction,
 *   !proto.proto.TransactionResponse>}
 */
const methodInfo_createContract = new grpc.web.AbstractClientBase.MethodInfo(
  TransactionResponse_pb.TransactionResponse,
  /** @param {!proto.proto.Transaction} request */
  function(request) {
    return request.serializeBinary();
  },
  TransactionResponse_pb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServiceClient.prototype.createContract =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SmartContractService/createContract',
      request,
      metadata,
      methodInfo_createContract,
      callback);
};


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.TransactionResponse>}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServicePromiseClient.prototype.createContract =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createContract(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Transaction,
 *   !proto.proto.TransactionResponse>}
 */
const methodInfo_updateContract = new grpc.web.AbstractClientBase.MethodInfo(
  TransactionResponse_pb.TransactionResponse,
  /** @param {!proto.proto.Transaction} request */
  function(request) {
    return request.serializeBinary();
  },
  TransactionResponse_pb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServiceClient.prototype.updateContract =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SmartContractService/updateContract',
      request,
      metadata,
      methodInfo_updateContract,
      callback);
};


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.TransactionResponse>}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServicePromiseClient.prototype.updateContract =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateContract(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Transaction,
 *   !proto.proto.TransactionResponse>}
 */
const methodInfo_contractCallMethod = new grpc.web.AbstractClientBase.MethodInfo(
  TransactionResponse_pb.TransactionResponse,
  /** @param {!proto.proto.Transaction} request */
  function(request) {
    return request.serializeBinary();
  },
  TransactionResponse_pb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServiceClient.prototype.contractCallMethod =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SmartContractService/contractCallMethod',
      request,
      metadata,
      methodInfo_contractCallMethod,
      callback);
};


/**
 * @param {!proto.proto.Transaction} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.TransactionResponse>}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServicePromiseClient.prototype.contractCallMethod =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.contractCallMethod(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Query,
 *   !proto.proto.Response>}
 */
const methodInfo_getContractInfo = new grpc.web.AbstractClientBase.MethodInfo(
  Response_pb.Response,
  /** @param {!proto.proto.Query} request */
  function(request) {
    return request.serializeBinary();
  },
  Response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServiceClient.prototype.getContractInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SmartContractService/getContractInfo',
      request,
      metadata,
      methodInfo_getContractInfo,
      callback);
};


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServicePromiseClient.prototype.getContractInfo =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getContractInfo(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Query,
 *   !proto.proto.Response>}
 */
const methodInfo_contractCallLocalMethod = new grpc.web.AbstractClientBase.MethodInfo(
  Response_pb.Response,
  /** @param {!proto.proto.Query} request */
  function(request) {
    return request.serializeBinary();
  },
  Response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServiceClient.prototype.contractCallLocalMethod =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SmartContractService/contractCallLocalMethod',
      request,
      metadata,
      methodInfo_contractCallLocalMethod,
      callback);
};


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServicePromiseClient.prototype.contractCallLocalMethod =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.contractCallLocalMethod(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Query,
 *   !proto.proto.Response>}
 */
const methodInfo_ContractGetBytecode = new grpc.web.AbstractClientBase.MethodInfo(
  Response_pb.Response,
  /** @param {!proto.proto.Query} request */
  function(request) {
    return request.serializeBinary();
  },
  Response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServiceClient.prototype.contractGetBytecode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SmartContractService/ContractGetBytecode',
      request,
      metadata,
      methodInfo_ContractGetBytecode,
      callback);
};


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServicePromiseClient.prototype.contractGetBytecode =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.contractGetBytecode(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Query,
 *   !proto.proto.Response>}
 */
const methodInfo_getBySolidityID = new grpc.web.AbstractClientBase.MethodInfo(
  Response_pb.Response,
  /** @param {!proto.proto.Query} request */
  function(request) {
    return request.serializeBinary();
  },
  Response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServiceClient.prototype.getBySolidityID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SmartContractService/getBySolidityID',
      request,
      metadata,
      methodInfo_getBySolidityID,
      callback);
};


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServicePromiseClient.prototype.getBySolidityID =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getBySolidityID(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Query,
 *   !proto.proto.Response>}
 */
const methodInfo_getTxRecordByContractID = new grpc.web.AbstractClientBase.MethodInfo(
  Response_pb.Response,
  /** @param {!proto.proto.Query} request */
  function(request) {
    return request.serializeBinary();
  },
  Response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServiceClient.prototype.getTxRecordByContractID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SmartContractService/getTxRecordByContractID',
      request,
      metadata,
      methodInfo_getTxRecordByContractID,
      callback);
};


/**
 * @param {!proto.proto.Query} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Response>}
 *     The XHR Node Readable Stream
 */
proto.proto.SmartContractServicePromiseClient.prototype.getTxRecordByContractID =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getTxRecordByContractID(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.proto;

