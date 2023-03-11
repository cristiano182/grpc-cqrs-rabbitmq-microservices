"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBankTransactionUsecase = void 0;
class ListBankTransactionUsecase {
    constructor(bankTransactionGateway) {
        this.bankTransactionGateway = bankTransactionGateway;
    }
    async list(cpf) {
        return this.bankTransactionGateway.list(cpf);
    }
}
exports.ListBankTransactionUsecase = ListBankTransactionUsecase;
//# sourceMappingURL=list-transaction.js.map