import { RabbitMQConsumer } from "../../infra/rabbitmq/consumer"



export default class BankTransactionRegistedEventConsumer {
    static Consume(): Promise<void>{
    const queue = "bank-transaction-registered"
    return RabbitMQConsumer.consumer(queue)
    }
}