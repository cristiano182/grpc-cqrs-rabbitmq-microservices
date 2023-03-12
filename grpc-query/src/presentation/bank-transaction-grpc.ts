import { ListTransactionGatewayRedis } from "../infra/gateway/redis/list-transaction";
import {
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";

import { ListTransactionUsecase } from "../application/use-cases/list-transaction";

export const BankTransactionServer  = {
  async list(call: ServerUnaryCall<{cpf: string}, any>, callback: sendUnaryData<any>) {
      const request = call.request
      const listTransactionGateway = new ListTransactionGatewayRedis()
      const listTransactionUsecase = new ListTransactionUsecase(listTransactionGateway)
      const transactions = await listTransactionUsecase.list(request.cpf)
      return callback(null, {transactions});
  }
};











 
  


 