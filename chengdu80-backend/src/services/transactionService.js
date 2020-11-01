import db from '../db';
const Transaction = db.models.transaction;

export function getTransactions(ticker) {
  return Transaction.findAll({ where: { ticker: ticker } });
}
