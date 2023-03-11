import { BankTransaction } from "../../domain/entitys/bank-transaction";

export interface IBankTransactionGateway {
    register: (transaction: BankTransaction) => Promise<void>
    list: (cpf: string) => Promise<BankTransaction[]>
}
