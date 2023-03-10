export class BankTransactionError extends Error {
    constructor () {
      super('Invalid type transaction.')
      this.name = 'BankTransactionError'
    }
  }
  