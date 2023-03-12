import RabbitMQHelper from "./connection";
   

export class RabbitMQProducer {
   static async producer(queue: string, message: string): Promise<void>{
    try {
        const channel = await RabbitMQHelper.getClient()
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)))
        return
    } catch (error) {
        console.log(error)
    }
    }
}
   
 
   
 