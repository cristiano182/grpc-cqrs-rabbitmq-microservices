import { BankTransaction } from "../entitys/bank-transaction";


export interface IListBankTransactionUsecase {
    list: (cpf: string) => Promise<BankTransaction[]>
}