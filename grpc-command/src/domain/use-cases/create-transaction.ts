import { BankTransaction } from "../entitys/bank-transaction";


export interface ICreateTransactionUsecase {
    register: (transaction: BankTransaction) => Promise<void>
}