#!/bin/bash

echo "##################################################################################"
echo "Ensure we have grpc-node generator plugin and grpc-web generator plugin installed"
echo -e "##################################################################################\n"

export NODE_PROTOC=`which grpc_tools_node_protoc_plugin`
if [ "$NODE_PROTOC" = "" ]; then
    npm install -g grpc-tools
fi

export PROTOC_GEN_TS_PATH=`which protoc-gen-ts`
export NODE_PROTOC_TS=`which grpc_tools_node_protoc_ts`
if [ "$NODE_PROTOC_TS" = "" ] || [ "$PROTOC_GEN_TS_PATH" = "" ]; then
    npm install -g grpc_tools_node_protoc_ts
fi

WEB_PROTOC=`which protoc-gen-grpc-web`
if [ "$WEB_PROTOC" = "" ]; then
    npm install -g grpc-tools
    if [[ "$OSTYPE" == "linux-gnu" ]]; then
      wget https://github.com/grpc/grpc-web/releases/download/1.0.4/protoc-gen-grpc-web-1.0.4-linux-x86_64
      sudo mv protoc-gen-grpc-web-1.0.4-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web
      chmod +x /usr/local/bin/protoc-gen-grpc-web
    elif [[ "$OSTYPE" == "darwin"* ]]; then
      wget https://github.com/grpc/grpc-web/releases/download/1.0.4/protoc-gen-grpc-web-1.0.4-darwin-x86_64
      sudo mv protoc-gen-grpc-web-1.0.4-darwin-x86_64 /usr/local/bin/protoc-gen-grpc-web
      chmod +x /usr/local/bin/protoc-gen-grpc-web
    else
      echo "Your OS is not supported."
      echo "Please manually download and install from https://github.com/grpc/grpc-web/releases"
      exit 1
    fi
fi
