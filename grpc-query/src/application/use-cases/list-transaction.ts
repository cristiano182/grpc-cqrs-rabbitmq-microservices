import { BankTransaction } from "../../domain/entitys/bank-transaction";
import { BankTransactionError } from "../../domain/errors/bank-transaction-error";
import { IListTransactionUsecase } from "../../domain/use-cases/list-transaction";
import { IListTransactionGateway } from "../interfaces/list-transaction";


export class ListTransactionUsecase implements IListTransactionUsecase {

  constructor(private listTransactionGateway: IListTransactionGateway){}
   async list (cpf: string): Promise<BankTransaction[]> {
      if(!cpf) throw new BankTransactionError()
        return this.listTransactionGateway.list(cpf)
   }
}