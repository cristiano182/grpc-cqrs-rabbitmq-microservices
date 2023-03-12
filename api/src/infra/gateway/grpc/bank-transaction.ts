import { IBankTransactionGateway } from "@/application/interfaces/bank-transaction-gateway";
import { BankTransaction } from "@/domain/entitys/bank-transaction";
import { BankTransactionDTO } from "../../../application/dto/bank-transaction";
import GRPCCommandHelper from './connection/grpc-command-connection'
import GRPCQueryHelper from './connection/grpc-query-connection'

export class BankTransactionGatewayGRPC implements IBankTransactionGateway {

   async list (cpf: string): Promise<BankTransaction[]> {
   return await GRPCQueryHelper.getClient().list({cpf})
   }
    
   async register (transaction: BankTransactionDTO): Promise<void>{
   return GRPCCommandHelper.getClient().register(transaction)
   }
}