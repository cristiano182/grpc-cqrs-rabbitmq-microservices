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
const path_1 = __importDefault(require("path"));
const grpc = __importStar(require("@grpc/grpc-js"));
const protoLoader = __importStar(require("@grpc/proto-loader"));
const util_1 = require("util");
const env_1 = __importDefault(require("../../../../main/config/env"));
const protoConfig = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
class GRPCHelper {
    static getClient() {
        const protoDef = protoLoader.loadSync(path_1.default.resolve(__dirname, "../protos", `transaction.proto`), protoConfig);
        const proto = grpc.loadPackageDefinition(protoDef);
        this.grpcClient = new proto.BankTransaction(`localhost:${env_1.default.GRPC_COMMAND_PORT}`, grpc.credentials.createInsecure());
        Object.entries(this.grpcClient.__proto__).map(([prop, value]) => {
            if (value.originalName !== undefined) {
                this.grpcClient[prop] = (0, util_1.promisify)(value);
            }
        });
        return this.grpcClient;
    }
}
exports.default = GRPCHelper;
;
//# sourceMappingURL=index.js.map