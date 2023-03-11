import { Router } from "express";
import { adapterRoute } from "../adapter/express";
import { FactoryBankTransaction } from "../factories/register-transaction"

const route = Router()


route.post('/transaction', adapterRoute(FactoryBankTransaction.make()))


export default route