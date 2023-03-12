import { BankTransaction } from "../entitys/bank-transaction";


export interface IListTransactionUsecase {
    list: (cpf: string) => Promise<BankTransaction[]>
}