"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("../../infra/database/mongodb");
exports.default = mongodb_1.MongooseHelper.getClient().then(() => console.log("mongodb connected")).catch((err) => console.log("mongodb error connection", err));
//# sourceMappingURL=database.js.map