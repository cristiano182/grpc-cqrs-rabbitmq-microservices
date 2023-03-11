"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryBankTransaction = void 0;
const bank_transaction_1 = require("../../infra/gateway/grpc/bank-transaction");
const register_transaction_1 = require("../../application/use-cases/register-transaction");
const bank_transaction_2 = require("../../presentation/controller/bank-transaction");
class FactoryBankTransaction {
    static make() {
        const gateway = new bank_transaction_1.RegisterBankTransactionGatewayGRPC();
        const registerBankTransaction = new register_transaction_1.RegisterBankTransactionUsecase(gateway);
        return new bank_transaction_2.BankTransactionController(registerBankTransaction);
    }
}
exports.FactoryBankTransaction = FactoryBankTransaction;
//# sourceMappingURL=register-transaction.js.map