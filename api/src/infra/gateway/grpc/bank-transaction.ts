import { IBankTransactionGateway } from "@/application/interfaces/bank-transaction-gateway";
import { BankTransaction } from "@/domain/entitys/bank-transaction";
import { BankTransactionDTO } from "../../../application/dto/bank-transaction";
import GRPCHelper from './connection/index'

export class RegisterBankTransactionGatewayGRPC implements IBankTransactionGateway {

   async list (cpf: string): Promise<BankTransaction[]> {
   //  const grpcClient = await GRPCHelper.getClient()
     // return grpcClient.list(cpf)
     return {} as BankTransaction[]
   }
    
   async register (transaction: BankTransactionDTO): Promise<void>{
         await GRPCHelper.getClient().register(transaction)
      return;
   }
}