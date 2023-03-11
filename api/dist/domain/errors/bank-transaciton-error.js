"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransactionTypeError = void 0;
class BankTransactionTypeError extends Error {
    constructor() {
        super("Invalid type transaction,");
        this.name = "BankTransactionTypeError";
    }
}
exports.BankTransactionTypeError = BankTransactionTypeError;
//# sourceMappingURL=bank-transaciton-error.js.map