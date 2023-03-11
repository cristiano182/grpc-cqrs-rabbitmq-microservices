"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapterRoute = void 0;
const adapterRoute = (controller) => {
    return async (request, response) => {
        const httpResponse = await controller.handle(request);
        return response.status(httpResponse.statusCode).json(httpResponse.data);
    };
};
exports.adapterRoute = adapterRoute;
//# sourceMappingURL=express.js.map