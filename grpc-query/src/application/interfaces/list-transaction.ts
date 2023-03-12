import { BankTransaction } from "../../domain/entitys/bank-transaction";


export interface IListTransactionGateway {
    list: (cpf: string) => Promise<BankTransaction[]>
}