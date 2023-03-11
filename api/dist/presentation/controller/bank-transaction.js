"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransactionController = void 0;
const http_1 = require("../interfaces/http");
class BankTransactionController {
    constructor(registerBankTransactionUsecase) {
        this.registerBankTransactionUsecase = registerBankTransactionUsecase;
    }
    async handle(request) {
        try {
            const transaction = request.body;
            const response = await this.registerBankTransactionUsecase.register(transaction);
            return (0, http_1.ok)(response);
        }
        catch (err) {
            return (0, http_1.serverError)(err);
        }
    }
}
exports.BankTransactionController = BankTransactionController;
//# sourceMappingURL=bank-transaction.js.map