import { BankTransactionGatewayGRPC } from "../../infra/gateway/grpc/bank-transaction"
import { RegisterBankTransactionUsecase } from "../../application/use-cases/register-transaction"
import { IController } from "../../presentation/interfaces/controller"
import { RegisterBankTransactionController } from "../../presentation/controller/register-bank-transaction"


export class FactoryRegisterBankTransaction  {
    static make(): IController  {
        const gateway = new BankTransactionGatewayGRPC()
        const registerBankTransaction = new RegisterBankTransactionUsecase(gateway)
        return new RegisterBankTransactionController(registerBankTransaction)
    }
}