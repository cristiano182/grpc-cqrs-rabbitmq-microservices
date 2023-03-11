import { BankTransaction } from "@/domain/entitys/bank-transaction";
import { IListBankTransactionUsecase } from "@/domain/use-cases/list-transaction";
import { IBankTransactionGateway } from "../interfaces/bank-transaction-gateway";



export class ListBankTransactionUsecase implements IListBankTransactionUsecase {
    constructor(private readonly bankTransactionGateway: IBankTransactionGateway) {}
   async list (cpf: string): Promise<BankTransaction[]> {
    return this.bankTransactionGateway.list(cpf)
   }
}