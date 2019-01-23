#!/bin/bash

PROTO_DIR="proto"

echo "####################################################"
echo "Generating JavaScript/TypeScript protobuf for NodeJS"
echo "####################################################"

NODE_PROTOC=`which grpc_tools_node_protoc_plugin`
if [ "$NODE_PROTOC" = "" ]; then
    npm install -g grpc-tools
fi
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

OUT_DIR="pbnode/"

# Supports both JavaScript and TypeScript. TypeScript gives us autocomplete functionality.
mkdir -p ${OUT_DIR}

# TypeScript
protoc -I=${PROTO_DIR}/Common \
    -I=${PROTO_DIR}/Contract \
    -I=${PROTO_DIR}/Crypto \
    -I=${PROTO_DIR}/File \
    -I=${PROTO_DIR}/Query \
    -I=${PROTO_DIR}/Services \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`\
    --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
    --ts_out=${OUT_DIR} \
    --grpc_out=${OUT_DIR} \
    ${PROTO_DIR}/*/*.proto

# JavaScript
protoc -I=${PROTO_DIR}/Common \
    -I=${PROTO_DIR}/Contract \
    -I=${PROTO_DIR}/Crypto \
    -I=${PROTO_DIR}/File \
    -I=${PROTO_DIR}/Query \
    -I=${PROTO_DIR}/Services \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`\
    --js_out=import_style=commonjs,binary:${OUT_DIR} \
    --grpc_out=${OUT_DIR} \
    ${PROTO_DIR}/*/*.proto

echo "###############################################"
echo "Generating JavaScript protobuf for Web Frontend"
echo "###############################################"

OUT_DIR="pbweb/"

mkdir -p ${OUT_DIR}

protoc -I=${PROTO_DIR}/Common \
    -I=${PROTO_DIR}/Contract \
    -I=${PROTO_DIR}/Crypto \
    -I=${PROTO_DIR}/File \
    -I=${PROTO_DIR}/Query \
    -I=${PROTO_DIR}/Services \
    --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
    --js_out=import_style=commonjs:$OUT_DIR \
    --ts_out=${OUT_DIR} \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR \
    ${PROTO_DIR}/*/*.proto

protoc -I=${PROTO_DIR}/Common \
    -I=${PROTO_DIR}/Contract \
    -I=${PROTO_DIR}/Crypto \
    -I=${PROTO_DIR}/File \
    -I=${PROTO_DIR}/Query \
    -I=${PROTO_DIR}/Services \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$OUT_DIR \
    ${PROTO_DIR}/*/*.proto
