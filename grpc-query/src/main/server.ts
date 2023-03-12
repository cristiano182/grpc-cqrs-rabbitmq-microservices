import "reflect-metadata"
import {Server, ServerCredentials, loadPackageDefinition} from "@grpc/grpc-js"
import path from "path"
import * as protoLoader from '@grpc/proto-loader';
import { BankTransactionServer } from "../presentation/bank-transaction-grpc"
import env from "./config/env";


const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, "protos/transaction.proto"));
const proto = (loadPackageDefinition(
  packageDefinition
) as unknown) as any;

const server = new Server()


server.addService(proto.BankTransaction.service, BankTransactionServer);
server.bindAsync(`${env.HOST}:${env.PORT}`, ServerCredentials.createInsecure(), (err) => {
  if (err) console.log(err);
  console.log(`GRPC-QUERY listen on port => ${env.PORT} and HOST => ${env.HOST}`)
  server.start();
});



