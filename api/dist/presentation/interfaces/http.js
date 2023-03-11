"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.ok = void 0;
const ok = (data) => ({
    statusCode: 200,
    data
});
exports.ok = ok;
const serverError = (err) => ({
    statusCode: 500,
    data: err.stack
});
exports.serverError = serverError;
//# sourceMappingURL=http.js.map