#!/bin/bash

protoc protos/chat.proto --go_out=plugins=grpc:./server