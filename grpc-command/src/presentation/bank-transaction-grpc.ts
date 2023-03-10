import { CreateTransactionUsecase } from "../application/use-cases/create-transaction";
import { CreateTransactionGatewayMongoDB } from "../infra/gateway/mongodb/create-transaction";


 export const register = async (call: any, callback: Function) => {
try {
    const transaction = call.request

    const createTransactionGateway = new CreateTransactionGatewayMongoDB()
    const createTransactionUsecase = new CreateTransactionUsecase(createTransactionGateway)

     await createTransactionUsecase.register(transaction)
     return callback(null, {
        transaction: {},
      });
    
} catch (error) {
        return callback(null, { error})
    }
 }
 

 
  