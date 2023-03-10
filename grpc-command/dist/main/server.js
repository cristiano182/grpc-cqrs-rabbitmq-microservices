"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const path_1 = __importDefault(require("path"));
require("./config/database");
const protoLoader = __importStar(require("@grpc/proto-loader"));
const bank_transaction_grpc_1 = require("../presentation/bank-transaction-grpc");
const packageDefinition = protoLoader.loadSync(path_1.default.resolve(__dirname, "protos/transaction.proto"));
const proto = (0, grpc_js_1.loadPackageDefinition)(packageDefinition);
const server = new grpc_js_1.Server();
server.addService(proto.BankTransaction.service, bank_transaction_grpc_1.BankTransactionServer);
server.bindAsync('0.0.0.0:50051', grpc_js_1.ServerCredentials.createInsecure(), (err) => {
    if (err)
        console.log(err);
    console.log("GRPC listen on port: 50051");
    server.start();
});
//# sourceMappingURL=server.js.map