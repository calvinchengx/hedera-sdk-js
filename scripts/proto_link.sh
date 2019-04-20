#!/bin/bash

echo "##################################################################################"
echo "Copying generated protobuf packages to different projects"
echo -e "##################################################################################\n"

ROOT_DIR="hedera-grpc"

# path to project's target directory, for projects that require pbnode
declare -a PROJECTS_PBNODE=("pbnode")

declare -a PROJECTS_PBWEB=("pbweb")

if [ $# -eq 0 ] || [ $1 == "master" ]; then
  TARGET="master"
elif [ $1 == "vNext" ]; then
  TARGET="vNext"
else
  echo $TARGET
  echo "You can only provide master or vNext as arguments to this script"
  exit 1
fi

echo "Targeting pbnode-$TARGET and pbweb-$TARGET"

for i in "${PROJECTS_PBNODE[@]}"
do
  echo "Linking $ROOT_DIR/pbnode-$TARGET to $i"
  npx hedera-proto --proto $TARGET
done

for i in "${PROJECTS_PBWEB[@]}"
do
  echo "Linking $ROOT_DIR/pbweb-$TARGET to $i"
  npx hedera-proto --proto $TARGET
done