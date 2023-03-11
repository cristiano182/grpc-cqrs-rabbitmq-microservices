"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./config/env"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(index_1.default);
app.listen(env_1.default.PORT, () => {
    console.log("API Running on port: ", env_1.default.PORT);
});
//# sourceMappingURL=server.js.map