"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterBankTransactionUsecase = void 0;
const bank_transaciton_error_1 = require("../../domain/errors/bank-transaciton-error");
class RegisterBankTransactionUsecase {
    constructor(bankTransactionGateway) {
        this.bankTransactionGateway = bankTransactionGateway;
    }
    async register(transaction) {
        if (!transaction.type.match(/^(debit|credit)$/))
            throw new bank_transaciton_error_1.BankTransactionTypeError();
        return this.bankTransactionGateway.register(transaction);
    }
}
exports.RegisterBankTransactionUsecase = RegisterBankTransactionUsecase;
//# sourceMappingURL=register-transaction.js.map