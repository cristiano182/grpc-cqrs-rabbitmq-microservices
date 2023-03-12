export class BankTransactionError extends Error {
    constructor () {
      super('Invalid cpf.')
      this.name = 'BankTransactionError'
    }
  }
  