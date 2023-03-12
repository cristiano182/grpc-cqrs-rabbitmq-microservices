"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionUsecase = void 0;
const bank_transaction_error_1 = require("../../domain/errors/bank-transaction-error");
class CreateTransactionUsecase {
    constructor(createTransactionGateway) {
        this.createTransactionGateway = createTransactionGateway;
    }
    async register(transaction) {
        if (!transaction.type.match(/^(debit|credit)$/))
            throw new bank_transaction_error_1.BankTransactionError();
        return this.createTransactionGateway.register(transaction);
    }
}
exports.CreateTransactionUsecase = CreateTransactionUsecase;
//# sourceMappingURL=create-transaction.js.map