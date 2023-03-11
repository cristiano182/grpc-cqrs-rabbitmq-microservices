import { RegisterBankTransactionGatewayGRPC } from "../../infra/gateway/grpc/bank-transaction"
import { RegisterBankTransactionUsecase } from "../../application/use-cases/register-transaction"
import { IController } from "../../presentation/interfaces/controller"
import { BankTransactionController } from "../../presentation/controller/bank-transaction"


export class FactoryBankTransaction  {
    static make(): IController  {
        const gateway = new RegisterBankTransactionGatewayGRPC()
        const registerBankTransaction = new RegisterBankTransactionUsecase(gateway)
        return new BankTransactionController(registerBankTransaction)
    }
}