#!/bin/bash

source $(dirname $0)/proto_dependencies.sh

ROOT_DIR="hedera-grpc"

declare -a BRANCHES=("master" "vNext")

for i in "${BRANCHES[@]}"
do

  PROTO_DIR="$ROOT_DIR/proto-$i"

  echo "################################################################"
  echo "Generating JavaScript/TypeScript protobuf for NodeJS for $i"
  echo -e "#################################################################\n"

  OUT_DIR="$ROOT_DIR/pbnode-$i/"

  # Supports both JavaScript and TypeScript. TypeScript gives us autocomplete functionality.
  mkdir -p ${OUT_DIR}

  # Generate JavaScript code via grpc-tools
  grpc_tools_node_protoc -I ${PROTO_DIR} \
      --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
      --js_out=import_style=commonjs,binary:${OUT_DIR} \
      --grpc_out=${OUT_DIR} \
      ${PROTO_DIR}/*proto

  # Generate d.ts TypeScript definitions
  protoc -I ${PROTO_DIR} \
      --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
      --ts_out=${OUT_DIR} \
      ${PROTO_DIR}/*.proto

  echo "############################################################"
  echo "Generating JavaScript protobuf for Web Frontend for $i"
  echo -e "############################################################\n"

  OUT_DIR="$ROOT_DIR/pbweb-$i/"

  mkdir -p ${OUT_DIR}

  protoc -I=${PROTO_DIR} \
      --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
      --js_out=import_style=commonjs:$OUT_DIR \
      --ts_out=${OUT_DIR} \
      --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR \
      ${PROTO_DIR}/*.proto

  protoc -I=${PROTO_DIR} \
      --js_out=import_style=commonjs:$OUT_DIR \
      --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$OUT_DIR \
      ${PROTO_DIR}/*.proto

done
