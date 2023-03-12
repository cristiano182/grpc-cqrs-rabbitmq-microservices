import { IController } from "../interfaces/controller";
import { HttpRequest, HttpResponse, serverError, ok } from "../interfaces/http";
import { ListBankTransactionUsecase } from "../../application/use-cases/list-transaction";


export class ListBankTransactionController implements IController {
    constructor(private readonly listBankTransactionUsecase: ListBankTransactionUsecase) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
        try {
        const cpf = request.body.cpf
        const response = await this.listBankTransactionUsecase.list(cpf)
        return ok(response)
        } catch (err: any) {
          return serverError(err)
        }
    }
}