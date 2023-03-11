import { ICreateTransactionGateway } from "../../../application/interfaces/create-transaction";
import { BankTransaction } from "../../../domain/entitys/bank-transaction";
import { BankTransactionEntity } from "../../schemas/bank-transaction-sql"
import AppDataSource  from "../../database/postgres"

export class CreateTransactionGatewaySQL implements ICreateTransactionGateway {
  async register (transaction: BankTransaction): Promise<void> {
    const payload = new BankTransactionEntity()
    payload.cpf = transaction.cpf
    payload.value = transaction.value
    payload.type = transaction.type
    payload.date = transaction.date
    
    const repository = AppDataSource.getRepository(BankTransactionEntity)
    await repository.save(payload)
    return;
  }
    
}