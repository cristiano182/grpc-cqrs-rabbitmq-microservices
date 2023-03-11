import { BankTransaction } from "../../domain/entitys/bank-transaction";
import { BankTransactionError } from "../../domain/errors/bank-transaction-error";
import { ICreateTransactionUsecase } from "../../domain/use-cases/create-transaction";
import { ICreateTransactionGateway } from "../interfaces/create-transaction";


export class CreateTransactionUsecase implements ICreateTransactionUsecase {

  constructor(private createTransactionGateway: ICreateTransactionGateway){}
   async register (transaction: BankTransaction): Promise<void> {
      if(!transaction.type.match(/^(debit|credit)$/)) throw new BankTransactionError()
        return this.createTransactionGateway.register(transaction)
   }

}