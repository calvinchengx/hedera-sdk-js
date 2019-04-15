# Hedera SDK, JavaScript

This repository tracks https://github.com/hashgraph/hedera-protobuf and is used to generate JavaScript gRPC packages for Hedera.

## Set up

```
npm install
```

## Automated update for our pbnode and pbweb packages from hedera-protobuf

```
# by default, this will clone the latest hedera-protobuf on master branch and generate JS gRPC packages into pbnode and pbweb
# hedera-protobuf master branch is automatically tested against Hedera main-net and Hedera test-net
./scripts/proto.sh

# if we want to use the vNext branch (which is tested against Hedera engineering's testnet -- new features that are not released to main-net or test-net),
# then, run
./scripts/proto.sh vNext
```
