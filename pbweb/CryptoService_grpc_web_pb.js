/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var Query_pb = require('./Query_pb.js')

var Response_pb = require('./Response_pb.js')

var TransactionResponse_pb = require('./TransactionResponse_pb.js')

var Transaction_pb = require('./Transaction_pb.js')
const proto = {};
proto.proto = require('./CryptoService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.CryptoServiceClient =
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
proto.proto.CryptoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.proto.CryptoServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.proto.CryptoServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Transaction,
 *   !proto.proto.TransactionResponse>}
 */
const methodInfo_createAccount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.createAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/createAccount',
      request,
      metadata,
      methodInfo_createAccount,
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
proto.proto.CryptoServicePromiseClient.prototype.createAccount =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createAccount(
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
const methodInfo_updateAccount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.updateAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/updateAccount',
      request,
      metadata,
      methodInfo_updateAccount,
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
proto.proto.CryptoServicePromiseClient.prototype.updateAccount =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateAccount(
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
const methodInfo_cryptoTransfer = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.cryptoTransfer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/cryptoTransfer',
      request,
      metadata,
      methodInfo_cryptoTransfer,
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
proto.proto.CryptoServicePromiseClient.prototype.cryptoTransfer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.cryptoTransfer(
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
const methodInfo_cryptoDelete = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.cryptoDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/cryptoDelete',
      request,
      metadata,
      methodInfo_cryptoDelete,
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
proto.proto.CryptoServicePromiseClient.prototype.cryptoDelete =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.cryptoDelete(
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
const methodInfo_addClaim = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.addClaim =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/addClaim',
      request,
      metadata,
      methodInfo_addClaim,
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
proto.proto.CryptoServicePromiseClient.prototype.addClaim =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addClaim(
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
const methodInfo_deleteClaim = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.deleteClaim =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/deleteClaim',
      request,
      metadata,
      methodInfo_deleteClaim,
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
proto.proto.CryptoServicePromiseClient.prototype.deleteClaim =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteClaim(
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
const methodInfo_getClaim = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.getClaim =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/getClaim',
      request,
      metadata,
      methodInfo_getClaim,
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
proto.proto.CryptoServicePromiseClient.prototype.getClaim =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getClaim(
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
const methodInfo_getAccountRecords = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.getAccountRecords =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/getAccountRecords',
      request,
      metadata,
      methodInfo_getAccountRecords,
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
proto.proto.CryptoServicePromiseClient.prototype.getAccountRecords =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAccountRecords(
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
const methodInfo_cryptoGetBalance = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.cryptoGetBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/cryptoGetBalance',
      request,
      metadata,
      methodInfo_cryptoGetBalance,
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
proto.proto.CryptoServicePromiseClient.prototype.cryptoGetBalance =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.cryptoGetBalance(
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
const methodInfo_getAccountInfo = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.getAccountInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/getAccountInfo',
      request,
      metadata,
      methodInfo_getAccountInfo,
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
proto.proto.CryptoServicePromiseClient.prototype.getAccountInfo =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAccountInfo(
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
const methodInfo_getTransactionReceipts = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.getTransactionReceipts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/getTransactionReceipts',
      request,
      metadata,
      methodInfo_getTransactionReceipts,
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
proto.proto.CryptoServicePromiseClient.prototype.getTransactionReceipts =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getTransactionReceipts(
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
const methodInfo_getFastTransactionRecord = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.getFastTransactionRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/getFastTransactionRecord',
      request,
      metadata,
      methodInfo_getFastTransactionRecord,
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
proto.proto.CryptoServicePromiseClient.prototype.getFastTransactionRecord =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getFastTransactionRecord(
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
const methodInfo_getTxRecordByTxID = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.getTxRecordByTxID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/getTxRecordByTxID',
      request,
      metadata,
      methodInfo_getTxRecordByTxID,
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
proto.proto.CryptoServicePromiseClient.prototype.getTxRecordByTxID =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getTxRecordByTxID(
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
const methodInfo_getStakersByAccountID = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.proto.CryptoServiceClient.prototype.getStakersByAccountID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.CryptoService/getStakersByAccountID',
      request,
      metadata,
      methodInfo_getStakersByAccountID,
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
proto.proto.CryptoServicePromiseClient.prototype.getStakersByAccountID =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getStakersByAccountID(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.proto;

