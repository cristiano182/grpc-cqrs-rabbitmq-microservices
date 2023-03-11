"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterBankTransactionGatewayGRPC = void 0;
const index_1 = __importDefault(require("./connection/index"));
class RegisterBankTransactionGatewayGRPC {
    async list(cpf) {
        return {};
    }
    async register(transaction) {
        const response = await index_1.default.getClient().register(transaction);
        return response;
    }
}
exports.RegisterBankTransactionGatewayGRPC = RegisterBankTransactionGatewayGRPC;
//# sourceMappingURL=bank-transaction.js.map