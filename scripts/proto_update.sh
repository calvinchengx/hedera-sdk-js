#!/bin/bash

ROOT_DIR="hedera-grpc"

echo "####################################################"
echo "Remove existing proto files"
echo "####################################################"
mkdir -p "$ROOT_DIR/proto-master"
rm -r "$ROOT_DIR/proto-master"
mkdir -p "$ROOT_DIR/proto-vNext"
rm -r "$ROOT_DIR/proto-vNext"

git clone https://github.com/hashgraph/hedera-protobuf.git

echo "####################################################"
echo "Updating proto-master with proto files from master"
echo "####################################################"
# proto master
mkdir -p "$ROOT_DIR/proto-master"
cp -rf hedera-protobuf/src/main/proto/* "$ROOT_DIR/proto-master"

echo "####################################################"
echo "Updating proto-vNext with proto files from vNext"
echo "####################################################"
# proto vNext
mkdir -p "$ROOT_DIR/proto-vNext"
cd hedera-protobuf
git checkout vNext
cd ..
cp -r hedera-protobuf/src/main/proto/* "$ROOT_DIR/proto-vNext"
rm -rf hedera-protobuf

echo "####################################################"
echo "Proto files updated"
echo "####################################################"