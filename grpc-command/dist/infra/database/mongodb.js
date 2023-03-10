"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseHelper = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MongooseHelper {
    static async getClient() {
        if (!this.mongooseClient) {
            this.mongooseClient = await mongoose_1.default.connect('mongodb://localhost:27017/grpc-command', {});
        }
        return this.mongooseClient;
    }
}
exports.MongooseHelper = MongooseHelper;
//# sourceMappingURL=mongodb.js.map