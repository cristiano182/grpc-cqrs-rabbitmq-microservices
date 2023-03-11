import { RegisterBankTransactionUsecase } from "@/application/use-cases/register-transaction";
import { IController } from "../interfaces/controller";
import { HttpRequest, HttpResponse, serverError, ok } from "../interfaces/http";


export class BankTransactionController implements IController {
    constructor(private readonly registerBankTransactionUsecase: RegisterBankTransactionUsecase) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
        try {
        const transaction = request.body
        const response = await this.registerBankTransactionUsecase.register(transaction)
        return ok(response)
        } catch (err: any) {
          return serverError(err)
        }
    }
}