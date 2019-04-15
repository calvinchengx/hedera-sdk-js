#!/bin/bash

source $(dirname $0)/proto_update.sh
source $(dirname $0)/proto_generate.sh

if [ $# -eq 0 ] || [ $1 == "master" ]; then
  TARGET="master"
elif [ $1 == "vNext" ]; then
  TARGET="vNext"
else
  echo $TARGET
  echo "You can only provide master or vNext as arguments to this script"
  exit 1
fi

source $(dirname $0)/proto_copy.sh $TARGET