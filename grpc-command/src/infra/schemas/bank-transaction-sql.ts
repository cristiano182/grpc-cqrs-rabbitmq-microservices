import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class BankTransactionEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    cpf!: string

    @Column()
    date!: string

    @Column()
    type!: string

    @Column()
    value!: string

}