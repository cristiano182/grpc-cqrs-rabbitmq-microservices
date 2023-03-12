import { BankTransactionDTO } from "../../application/dto/bank-transaction"
import { RabbitMQProducer } from "../../infra/rabbitmq/producer"



export default class BankTransactionRegistedEventProducer {
    static async Produce(message: BankTransactionDTO): Promise<void>{
     const queue = "bank-transaction-registered"
     const payload: any = message
    return RabbitMQProducer.producer(queue,payload)
    }
}