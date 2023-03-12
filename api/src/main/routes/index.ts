import { Router } from "express";
import { adapterRoute } from "../adapter/express";
import { FactoryListBankTransaction } from "../factories/list-transaction";
import { FactoryRegisterBankTransaction } from "../factories/register-transaction"

const route = Router()


route.post('/transaction', adapterRoute(FactoryRegisterBankTransaction.make()))
route.get('/transaction', adapterRoute(FactoryListBankTransaction.make()))



export default route