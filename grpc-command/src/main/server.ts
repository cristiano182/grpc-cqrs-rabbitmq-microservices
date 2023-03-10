import grpc from "grpc"
import path  from 'path'
import protoLoader from "@grpc/proto-loader"

import "./config/database"

import * as implementation from "../presentation/bank-transaction-grpc"

const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, '../infra/grpc', 'bank-transaction.proto'),
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    }
  );
  const proto : any = grpc.loadPackageDefinition(packageDefinition);
  


const server = new grpc.Server()

server.addService(proto.BankTransactionService.service, implementation);
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()


