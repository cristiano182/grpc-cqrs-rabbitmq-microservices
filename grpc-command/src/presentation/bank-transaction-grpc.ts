import { BankTransactionDTO } from "@/application/dto/bank-transaction";
import {
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";

import { CreateTransactionUsecase } from "../application/use-cases/create-transaction";
import { CreateTransactionGatewayMongoDB } from "../infra/gateway/mongodb/create-transaction";

export const BankTransactionServer  = {

  async register(call: ServerUnaryCall<BankTransactionDTO, any>, callback: sendUnaryData<any>) {
      const transaction: BankTransactionDTO = call.request
      const createTransactionGateway = new CreateTransactionGatewayMongoDB()
      const createTransactionUsecase = new CreateTransactionUsecase(createTransactionGateway)
       await createTransactionUsecase.register(transaction)
       return callback(null);
  }
};











 
  


 