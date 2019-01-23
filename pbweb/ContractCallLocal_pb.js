/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var BasicTypes_pb = require('./BasicTypes_pb.js');
var QueryHeader_pb = require('./QueryHeader_pb.js');
var ResponseHeader_pb = require('./ResponseHeader_pb.js');
goog.exportSymbol('proto.proto.ContractCallLocalQuery', null, global);
goog.exportSymbol('proto.proto.ContractCallLocalResponse', null, global);
goog.exportSymbol('proto.proto.ContractFunctionResult', null, global);
goog.exportSymbol('proto.proto.ContractLoginfo', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ContractLoginfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ContractLoginfo.repeatedFields_, null);
};
goog.inherits(proto.proto.ContractLoginfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ContractLoginfo.displayName = 'proto.proto.ContractLoginfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ContractLoginfo.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ContractLoginfo.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ContractLoginfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ContractLoginfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractLoginfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractid: (f = msg.getContractid()) && BasicTypes_pb.ContractID.toObject(includeInstance, f),
    bloom: msg.getBloom_asB64(),
    topicList: msg.getTopicList_asB64(),
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ContractLoginfo}
 */
proto.proto.ContractLoginfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ContractLoginfo;
  return proto.proto.ContractLoginfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ContractLoginfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ContractLoginfo}
 */
proto.proto.ContractLoginfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new BasicTypes_pb.ContractID;
      reader.readMessage(value,BasicTypes_pb.ContractID.deserializeBinaryFromReader);
      msg.setContractid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBloom(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTopic(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ContractLoginfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ContractLoginfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ContractLoginfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractLoginfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.ContractID.serializeBinaryToWriter
    );
  }
  f = message.getBloom_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getTopicList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional ContractID contractID = 1;
 * @return {?proto.proto.ContractID}
 */
proto.proto.ContractLoginfo.prototype.getContractid = function() {
  return /** @type{?proto.proto.ContractID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ContractID, 1));
};


/** @param {?proto.proto.ContractID|undefined} value */
proto.proto.ContractLoginfo.prototype.setContractid = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ContractLoginfo.prototype.clearContractid = function() {
  this.setContractid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ContractLoginfo.prototype.hasContractid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes bloom = 2;
 * @return {string}
 */
proto.proto.ContractLoginfo.prototype.getBloom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes bloom = 2;
 * This is a type-conversion wrapper around `getBloom()`
 * @return {string}
 */
proto.proto.ContractLoginfo.prototype.getBloom_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBloom()));
};


/**
 * optional bytes bloom = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBloom()`
 * @return {!Uint8Array}
 */
proto.proto.ContractLoginfo.prototype.getBloom_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBloom()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.ContractLoginfo.prototype.setBloom = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated bytes topic = 3;
 * @return {!Array<string>}
 */
proto.proto.ContractLoginfo.prototype.getTopicList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes topic = 3;
 * This is a type-conversion wrapper around `getTopicList()`
 * @return {!Array<string>}
 */
proto.proto.ContractLoginfo.prototype.getTopicList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getTopicList()));
};


/**
 * repeated bytes topic = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTopicList()`
 * @return {!Array<!Uint8Array>}
 */
proto.proto.ContractLoginfo.prototype.getTopicList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTopicList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.proto.ContractLoginfo.prototype.setTopicList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.proto.ContractLoginfo.prototype.addTopic = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.proto.ContractLoginfo.prototype.clearTopicList = function() {
  this.setTopicList([]);
};


/**
 * optional bytes data = 4;
 * @return {string}
 */
proto.proto.ContractLoginfo.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes data = 4;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.proto.ContractLoginfo.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.proto.ContractLoginfo.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.ContractLoginfo.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ContractFunctionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ContractFunctionResult.repeatedFields_, null);
};
goog.inherits(proto.proto.ContractFunctionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ContractFunctionResult.displayName = 'proto.proto.ContractFunctionResult';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ContractFunctionResult.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ContractFunctionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ContractFunctionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ContractFunctionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractFunctionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractid: (f = msg.getContractid()) && BasicTypes_pb.ContractID.toObject(includeInstance, f),
    contractcallresult: msg.getContractcallresult_asB64(),
    errormessage: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bloom: msg.getBloom_asB64(),
    gasused: jspb.Message.getFieldWithDefault(msg, 5, 0),
    loginfoList: jspb.Message.toObjectList(msg.getLoginfoList(),
    proto.proto.ContractLoginfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ContractFunctionResult}
 */
proto.proto.ContractFunctionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ContractFunctionResult;
  return proto.proto.ContractFunctionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ContractFunctionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ContractFunctionResult}
 */
proto.proto.ContractFunctionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new BasicTypes_pb.ContractID;
      reader.readMessage(value,BasicTypes_pb.ContractID.deserializeBinaryFromReader);
      msg.setContractid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContractcallresult(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrormessage(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBloom(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGasused(value);
      break;
    case 6:
      var value = new proto.proto.ContractLoginfo;
      reader.readMessage(value,proto.proto.ContractLoginfo.deserializeBinaryFromReader);
      msg.addLoginfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ContractFunctionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ContractFunctionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ContractFunctionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractFunctionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.ContractID.serializeBinaryToWriter
    );
  }
  f = message.getContractcallresult_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getErrormessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBloom_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getGasused();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getLoginfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.proto.ContractLoginfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ContractID contractID = 1;
 * @return {?proto.proto.ContractID}
 */
proto.proto.ContractFunctionResult.prototype.getContractid = function() {
  return /** @type{?proto.proto.ContractID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ContractID, 1));
};


/** @param {?proto.proto.ContractID|undefined} value */
proto.proto.ContractFunctionResult.prototype.setContractid = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ContractFunctionResult.prototype.clearContractid = function() {
  this.setContractid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ContractFunctionResult.prototype.hasContractid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes contractCallResult = 2;
 * @return {string}
 */
proto.proto.ContractFunctionResult.prototype.getContractcallresult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes contractCallResult = 2;
 * This is a type-conversion wrapper around `getContractcallresult()`
 * @return {string}
 */
proto.proto.ContractFunctionResult.prototype.getContractcallresult_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContractcallresult()));
};


/**
 * optional bytes contractCallResult = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContractcallresult()`
 * @return {!Uint8Array}
 */
proto.proto.ContractFunctionResult.prototype.getContractcallresult_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContractcallresult()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.ContractFunctionResult.prototype.setContractcallresult = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string errorMessage = 3;
 * @return {string}
 */
proto.proto.ContractFunctionResult.prototype.getErrormessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.proto.ContractFunctionResult.prototype.setErrormessage = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes bloom = 4;
 * @return {string}
 */
proto.proto.ContractFunctionResult.prototype.getBloom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes bloom = 4;
 * This is a type-conversion wrapper around `getBloom()`
 * @return {string}
 */
proto.proto.ContractFunctionResult.prototype.getBloom_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBloom()));
};


/**
 * optional bytes bloom = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBloom()`
 * @return {!Uint8Array}
 */
proto.proto.ContractFunctionResult.prototype.getBloom_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBloom()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.ContractFunctionResult.prototype.setBloom = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional uint64 gasUsed = 5;
 * @return {number}
 */
proto.proto.ContractFunctionResult.prototype.getGasused = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.proto.ContractFunctionResult.prototype.setGasused = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated ContractLoginfo logInfo = 6;
 * @return {!Array<!proto.proto.ContractLoginfo>}
 */
proto.proto.ContractFunctionResult.prototype.getLoginfoList = function() {
  return /** @type{!Array<!proto.proto.ContractLoginfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ContractLoginfo, 6));
};


/** @param {!Array<!proto.proto.ContractLoginfo>} value */
proto.proto.ContractFunctionResult.prototype.setLoginfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.proto.ContractLoginfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ContractLoginfo}
 */
proto.proto.ContractFunctionResult.prototype.addLoginfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.proto.ContractLoginfo, opt_index);
};


proto.proto.ContractFunctionResult.prototype.clearLoginfoList = function() {
  this.setLoginfoList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ContractCallLocalQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ContractCallLocalQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ContractCallLocalQuery.displayName = 'proto.proto.ContractCallLocalQuery';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ContractCallLocalQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ContractCallLocalQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ContractCallLocalQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractCallLocalQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && QueryHeader_pb.QueryHeader.toObject(includeInstance, f),
    contractid: (f = msg.getContractid()) && BasicTypes_pb.ContractID.toObject(includeInstance, f),
    gas: jspb.Message.getFieldWithDefault(msg, 3, 0),
    functionparameters: msg.getFunctionparameters_asB64(),
    maxresultsize: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ContractCallLocalQuery}
 */
proto.proto.ContractCallLocalQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ContractCallLocalQuery;
  return proto.proto.ContractCallLocalQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ContractCallLocalQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ContractCallLocalQuery}
 */
proto.proto.ContractCallLocalQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new QueryHeader_pb.QueryHeader;
      reader.readMessage(value,QueryHeader_pb.QueryHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new BasicTypes_pb.ContractID;
      reader.readMessage(value,BasicTypes_pb.ContractID.deserializeBinaryFromReader);
      msg.setContractid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGas(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFunctionparameters(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxresultsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ContractCallLocalQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ContractCallLocalQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ContractCallLocalQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractCallLocalQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      QueryHeader_pb.QueryHeader.serializeBinaryToWriter
    );
  }
  f = message.getContractid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.ContractID.serializeBinaryToWriter
    );
  }
  f = message.getGas();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getFunctionparameters_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getMaxresultsize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional QueryHeader header = 1;
 * @return {?proto.proto.QueryHeader}
 */
proto.proto.ContractCallLocalQuery.prototype.getHeader = function() {
  return /** @type{?proto.proto.QueryHeader} */ (
    jspb.Message.getWrapperField(this, QueryHeader_pb.QueryHeader, 1));
};


/** @param {?proto.proto.QueryHeader|undefined} value */
proto.proto.ContractCallLocalQuery.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ContractCallLocalQuery.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ContractCallLocalQuery.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContractID contractID = 2;
 * @return {?proto.proto.ContractID}
 */
proto.proto.ContractCallLocalQuery.prototype.getContractid = function() {
  return /** @type{?proto.proto.ContractID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ContractID, 2));
};


/** @param {?proto.proto.ContractID|undefined} value */
proto.proto.ContractCallLocalQuery.prototype.setContractid = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.proto.ContractCallLocalQuery.prototype.clearContractid = function() {
  this.setContractid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ContractCallLocalQuery.prototype.hasContractid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 gas = 3;
 * @return {number}
 */
proto.proto.ContractCallLocalQuery.prototype.getGas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.ContractCallLocalQuery.prototype.setGas = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes functionParameters = 4;
 * @return {string}
 */
proto.proto.ContractCallLocalQuery.prototype.getFunctionparameters = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes functionParameters = 4;
 * This is a type-conversion wrapper around `getFunctionparameters()`
 * @return {string}
 */
proto.proto.ContractCallLocalQuery.prototype.getFunctionparameters_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFunctionparameters()));
};


/**
 * optional bytes functionParameters = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFunctionparameters()`
 * @return {!Uint8Array}
 */
proto.proto.ContractCallLocalQuery.prototype.getFunctionparameters_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFunctionparameters()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.ContractCallLocalQuery.prototype.setFunctionparameters = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional int64 maxResultSize = 5;
 * @return {number}
 */
proto.proto.ContractCallLocalQuery.prototype.getMaxresultsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.proto.ContractCallLocalQuery.prototype.setMaxresultsize = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ContractCallLocalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ContractCallLocalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ContractCallLocalResponse.displayName = 'proto.proto.ContractCallLocalResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ContractCallLocalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ContractCallLocalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ContractCallLocalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractCallLocalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && ResponseHeader_pb.ResponseHeader.toObject(includeInstance, f),
    functionresult: (f = msg.getFunctionresult()) && proto.proto.ContractFunctionResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ContractCallLocalResponse}
 */
proto.proto.ContractCallLocalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ContractCallLocalResponse;
  return proto.proto.ContractCallLocalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ContractCallLocalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ContractCallLocalResponse}
 */
proto.proto.ContractCallLocalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ResponseHeader_pb.ResponseHeader;
      reader.readMessage(value,ResponseHeader_pb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.proto.ContractFunctionResult;
      reader.readMessage(value,proto.proto.ContractFunctionResult.deserializeBinaryFromReader);
      msg.setFunctionresult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ContractCallLocalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ContractCallLocalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ContractCallLocalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractCallLocalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ResponseHeader_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getFunctionresult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.ContractFunctionResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.proto.ResponseHeader}
 */
proto.proto.ContractCallLocalResponse.prototype.getHeader = function() {
  return /** @type{?proto.proto.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, ResponseHeader_pb.ResponseHeader, 1));
};


/** @param {?proto.proto.ResponseHeader|undefined} value */
proto.proto.ContractCallLocalResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ContractCallLocalResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ContractCallLocalResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContractFunctionResult functionResult = 2;
 * @return {?proto.proto.ContractFunctionResult}
 */
proto.proto.ContractCallLocalResponse.prototype.getFunctionresult = function() {
  return /** @type{?proto.proto.ContractFunctionResult} */ (
    jspb.Message.getWrapperField(this, proto.proto.ContractFunctionResult, 2));
};


/** @param {?proto.proto.ContractFunctionResult|undefined} value */
proto.proto.ContractCallLocalResponse.prototype.setFunctionresult = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.proto.ContractCallLocalResponse.prototype.clearFunctionresult = function() {
  this.setFunctionresult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ContractCallLocalResponse.prototype.hasFunctionresult = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.proto);
