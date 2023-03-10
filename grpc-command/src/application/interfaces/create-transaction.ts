import { BankTransaction } from "../../domain/entitys/bank-transaction";


export interface ICreateTransactionGateway {
    register: (transaction: BankTransaction) => Promise<void>
}