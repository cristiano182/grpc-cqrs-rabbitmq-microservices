"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bankTransactionSchema = new mongoose_1.default.Schema({
    cpf: String,
    date: String,
    value: String,
    type: String,
});
exports.default = mongoose_1.default.model('BankTransaction', bankTransactionSchema);
//# sourceMappingURL=bank-transaction-schema.js.map