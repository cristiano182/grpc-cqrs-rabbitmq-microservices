import path from "path"
import * as grpc  from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader'
import { promisify }  from 'util'
import env from "../../../../main/config/env";

const protoConfig = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  };

export default class GRPCQueryHelper  {
    static grpcClient: any;

    static getClient() {
        const protoDef = protoLoader.loadSync(
            path.resolve(__dirname, "../protos", `transaction.proto`),
            protoConfig
          );
          const proto: any = grpc.loadPackageDefinition(protoDef);
          this.grpcClient = new proto.BankTransaction(`${env.GRPC_QUERY_HOST}:${env.GRPC_QUERY_PORT}`, grpc.credentials.createInsecure());
          Object.entries(this.grpcClient.__proto__).map(([prop, value]: any) => {
            if (value.originalName !== undefined) {
              this.grpcClient[prop] = promisify(value);
            }
          });
          return this.grpcClient;
    }
};
 