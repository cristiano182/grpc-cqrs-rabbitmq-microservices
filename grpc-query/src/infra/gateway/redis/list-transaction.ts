import { RedisHelper } from "../../database/redis";
import { IListTransactionGateway } from "../../../application/interfaces/list-transaction";
import { BankTransactionDTO } from "../../../application/dto/bank-transaction";


export class ListTransactionGatewayRedis implements IListTransactionGateway {
  async list (cpf: string): Promise<BankTransactionDTO[]> {
    const redisClient = await RedisHelper.getClient();
    const keys = await redisClient.keys(`${cpf}:*`)
    let transactions = await redisClient.mget(keys)
    if(!(transactions instanceof Object)) return [] as BankTransactionDTO[]
    return await transactions.map((item: any) => JSON.parse(item))
  }
}