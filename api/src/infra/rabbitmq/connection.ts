import * as amqplib from "amqplib"
import env from "../../main/config/env";


export default class RabbitMQHelper {

     static async getClient(): Promise<amqplib.Channel >{
       return amqplib.connect(`amqp://username:password@${env.RABBITMQ_HOST}:5672`).then((connection) => {
        console.log("RabbitMQ connected")
        return connection.createChannel()
       })
        
    }

     static async createQueue(channel: amqplib.Channel, queue: string): Promise<amqplib.Channel>{
            await channel.assertQueue(queue)
            return channel
      }
}


