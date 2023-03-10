import { ICreateTransactionGateway } from "../../../application/interfaces/create-transaction";
import { BankTransaction } from "../../../domain/entitys/bank-transaction";
import bankTransactionSchema from "../../schemas/bank-transaction-schema";

export class CreateTransactionGatewayMongoDB implements ICreateTransactionGateway {
  async register (transaction: BankTransaction): Promise<void> {
   await bankTransactionSchema.create(transaction)
    return;
  }
    
}