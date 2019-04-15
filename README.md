# Hedera SDK, JavaScript

[![NPM](https://img.shields.io/npm/v/hedera-sdk-js.svg)](https://img.shields.io/npm/v/hedera-sdk-js.svg)
![CircleCI branch](https://img.shields.io/circleci/project/github/calvinchengx/hedera-sdk-js/master.svg?label=circleci)
[![Snyk](https://img.shields.io/snyk/vulnerabilities/github/calvinchengx/hedera-sdk-js.svg)](https://img.shields.io/snyk/vulnerabilities/github/calvinchengx/hedera-sdk-js.svg)

This repository tracks https://github.com/hashgraph/hedera-protobuf and is used to generate JavaScript gRPC packages for Hedera.

## Set up

```
npm install
```

## Automated update for our pbnode and pbweb packages from hedera-protobuf

```
# by default, this will clone the latest hedera-protobuf on master branch and 
# generate JS gRPC packages into pbnode and pbweb
# hedera-protobuf master branch is automatically tested against Hedera main-net 
# and Hedera test-net
./scripts/proto.sh

# if we want to use the vNext branch (which is tested against Hedera engineering's 
# testnet -- new features that are not released to main-net or test-net),
# then, run
./scripts/proto.sh vNext
```
