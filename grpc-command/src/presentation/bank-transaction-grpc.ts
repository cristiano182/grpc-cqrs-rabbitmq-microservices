import { BankTransactionDTO } from "../application/dto/bank-transaction";
import { CreateTransactionGatewaySQL } from "../infra/gateway/postgres/create-transaction";
import {
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";

import { CreateTransactionUsecase } from "../application/use-cases/create-transaction";

export const BankTransactionServer  = {

  async register(call: ServerUnaryCall<BankTransactionDTO, any>, callback: sendUnaryData<any>) {
      const transaction: BankTransactionDTO = call.request
      const createTransactionGateway = new CreateTransactionGatewaySQL()
      const createTransactionUsecase = new CreateTransactionUsecase(createTransactionGateway)
       await createTransactionUsecase.register(transaction)
       return callback(null);
  }
};











 
  


 