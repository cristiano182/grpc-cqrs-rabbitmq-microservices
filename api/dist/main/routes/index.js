"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_2 = require("../adapter/express");
const register_transaction_1 = require("../factories/register-transaction");
const route = (0, express_1.Router)();
route.post('/transaction', (0, express_2.adapterRoute)(register_transaction_1.FactoryBankTransaction.make()));
exports.default = route;
//# sourceMappingURL=index.js.map