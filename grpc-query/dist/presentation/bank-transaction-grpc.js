"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransactionServer = void 0;
const create_transaction_1 = require("../application/use-cases/create-transaction");
const create_transaction_2 = require("../infra/gateway/mongodb/create-transaction");
exports.BankTransactionServer = {
    async register(call, callback) {
        const transaction = call.request;
        console.log("grpc-command request", call.request);
        const createTransactionGateway = new create_transaction_2.CreateTransactionGatewayMongoDB();
        const createTransactionUsecase = new create_transaction_1.CreateTransactionUsecase(createTransactionGateway);
        await createTransactionUsecase.register(transaction);
        return callback(null);
    }
};
//# sourceMappingURL=bank-transaction-grpc.js.map