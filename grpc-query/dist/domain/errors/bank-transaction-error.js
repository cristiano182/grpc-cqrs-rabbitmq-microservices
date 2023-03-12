"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransactionError = void 0;
class BankTransactionError extends Error {
    constructor() {
        super('Invalid type transaction.');
        this.name = 'BankTransactionError';
    }
}
exports.BankTransactionError = BankTransactionError;
//# sourceMappingURL=bank-transaction-error.js.map