/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatClient =
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

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatPromiseClient =
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

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.ChatRequest,
 *   !proto.chat.ChatResponse>}
 */
const methodDescriptor_Chat_GetChat = new grpc.web.MethodDescriptor(
  '/chat.Chat/GetChat',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.chat.ChatRequest,
  proto.chat.ChatResponse,
  /**
   * @param {!proto.chat.ChatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.ChatResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.ChatRequest,
 *   !proto.chat.ChatResponse>}
 */
const methodInfo_Chat_GetChat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.ChatResponse,
  /**
   * @param {!proto.chat.ChatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.ChatResponse.deserializeBinary
);


/**
 * @param {!proto.chat.ChatRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.ChatResponse>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.getChat =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.Chat/GetChat',
      request,
      metadata || {},
      methodDescriptor_Chat_GetChat);
};


/**
 * @param {!proto.chat.ChatRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.ChatResponse>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatPromiseClient.prototype.getChat =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.Chat/GetChat',
      request,
      metadata || {},
      methodDescriptor_Chat_GetChat);
};


module.exports = proto.chat;

