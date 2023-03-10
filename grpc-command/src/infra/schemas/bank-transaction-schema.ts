import mongoose from 'mongoose'

const bankTransactionSchema = new mongoose.Schema({
    cpf: String,
    date: String,
    value: String,
    type: String,
});

export default mongoose.model('BankTransaction', bankTransactionSchema);