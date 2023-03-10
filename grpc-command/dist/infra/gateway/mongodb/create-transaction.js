"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionGatewayMongoDB = void 0;
const bank_transaction_schema_1 = __importDefault(require("../../schemas/bank-transaction-schema"));
class CreateTransactionGatewayMongoDB {
    async register(transaction) {
        await bank_transaction_schema_1.default.create(transaction);
        return;
    }
}
exports.CreateTransactionGatewayMongoDB = CreateTransactionGatewayMongoDB;
//# sourceMappingURL=create-transaction.js.map