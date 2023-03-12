import BankTransactionRegistedEventProducer from "../../events/handler-producer/bank-transaction-registered-producer";
import { RegisterBankTransactionUsecase } from "../../application/use-cases/register-transaction";
import { IController } from "../interfaces/controller";
import { HttpRequest, HttpResponse, serverError, ok } from "../interfaces/http";


export class RegisterBankTransactionController implements IController {
    constructor(private readonly registerBankTransactionUsecase: RegisterBankTransactionUsecase) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
        try {
        const transaction = request.body
        const response = await this.registerBankTransactionUsecase.register(transaction)
        BankTransactionRegistedEventProducer.Produce(transaction)
        return ok(response)
        } catch (err: any) {
          return serverError(err)
        }
    }
}