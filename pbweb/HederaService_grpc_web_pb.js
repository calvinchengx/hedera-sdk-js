/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var Transaction_pb = require('./Transaction_pb.js')

var TransactionResponse_pb = require('./TransactionResponse_pb.js')

var Query_pb = require('./Query_pb.js')

var Response_pb = require('./Response_pb.js')
const proto = {};
proto.proto = require('./HederaService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.HederaServiceClient =
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
proto.proto.HederaServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.proto.HederaServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.proto.HederaServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Transaction,
 *   !proto.proto.TransactionResponse>}
 */
const methodInfo_SubmitTransaction = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.HederaServiceClient.prototype.submitTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.HederaService/SubmitTransaction',
      request,
      metadata,
      methodInfo_SubmitTransaction,
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
proto.proto.HederaServicePromiseClient.prototype.submitTransaction =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.submitTransaction(
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
const methodInfo_SubmitQuery = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.HederaServiceClient.prototype.submitQuery =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.HederaService/SubmitQuery',
      request,
      metadata,
      methodInfo_SubmitQuery,
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
proto.proto.HederaServicePromiseClient.prototype.submitQuery =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.submitQuery(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.proto;

