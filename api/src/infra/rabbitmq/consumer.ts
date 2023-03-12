import { RedisHelper } from "../database/redis";
import RabbitMQHelper from "./connection";
   

export class RabbitMQConsumer {
     static async consumer(queue: string): Promise<void>{
       const client = await RabbitMQHelper.getClient()
       const channel = await RabbitMQHelper.createQueue(client,queue)
        await channel.consume(queue, async (message: any) => {
            if(message){
              const transaction = message.content.toString()
              const redisClient = await RedisHelper.getClient();
              const cpf = JSON.parse(transaction).cpf
              const key = `${cpf}:${Date.now().toString(16)}`
              await redisClient.set(key, transaction);
              channel.ack(message)
            }
        })
      return
      }
}
   
 
   
 