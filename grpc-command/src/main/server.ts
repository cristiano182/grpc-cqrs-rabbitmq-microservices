import {Server, ServerCredentials, loadPackageDefinition} from "@grpc/grpc-js"
import path from "path"

import "./config/database"
import * as protoLoader from '@grpc/proto-loader';
import { BankTransactionServer } from "../presentation/bank-transaction-grpc"


const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, "protos/transaction.proto"));
const proto = (loadPackageDefinition(
  packageDefinition
) as unknown) as any;

const server = new Server()


server.addService(proto.BankTransaction.service, BankTransactionServer);
server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), (err) => {
  if (err) console.log(err);
  console.log("GRPC listen on port: 50051")
  server.start();
});



