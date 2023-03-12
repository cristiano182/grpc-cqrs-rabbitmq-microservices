import { DataSource } from "typeorm";
import { BankTransactionEntity } from "../schemas/bank-transaction-sql";

 const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [BankTransactionEntity],
})
 AppDataSource.initialize()
    .then(() => {
        console.log("postgres connected")
    })
    .catch((error) => console.log(error))

export default AppDataSource

