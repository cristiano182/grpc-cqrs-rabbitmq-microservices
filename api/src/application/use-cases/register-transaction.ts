import { BankTransaction } from "../../domain/entitys/bank-transaction";
import { BankTransactionTypeError } from "../../domain/errors/bank-transaciton-error";
import { IRegisterBankTransactionUsecase } from "../../domain/use-cases/register-transaction";
import { IBankTransactionGateway } from "../interfaces/bank-transaction-gateway";


export class RegisterBankTransactionUsecase implements  IRegisterBankTransactionUsecase {
  constructor (private readonly bankTransactionGateway: IBankTransactionGateway){}

   async register(transaction: BankTransaction): Promise<void> {
    if(!transaction.type.match(/^(debit|credit)$/)) throw new BankTransactionTypeError()
    return this.bankTransactionGateway.register(transaction)
   }

}



