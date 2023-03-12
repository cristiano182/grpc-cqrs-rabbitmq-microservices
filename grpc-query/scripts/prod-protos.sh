#!/bin/bash
BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_DEST=./dist/infra/protos

mkdir -p ${PROTO_DEST}

# JavaScript code generation
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=${PROTO_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./protos \
    protos/*.proto

