import { BankTransaction } from "../entitys/bank-transaction";


export interface IRegisterBankTransactionUsecase {
    register: (transaction: BankTransaction) => Promise<void>
}