import { BankTransactionGatewayGRPC } from "../../infra/gateway/grpc/bank-transaction"
import { IController } from "../../presentation/interfaces/controller"
import { ListBankTransactionUsecase } from "../../application/use-cases/list-transaction"
import { ListBankTransactionController } from "../../presentation/controller/list-bank-transaction"


export class FactoryListBankTransaction  {
    static make(): IController  {
        const gateway = new BankTransactionGatewayGRPC()
        const listBankTransaction = new ListBankTransactionUsecase(gateway)
        return new ListBankTransactionController(listBankTransaction)
    }
}