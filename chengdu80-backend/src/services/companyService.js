import db from '../db';
const Company = db.models.company;

export function getCompanyDetails(ticker) {
  return Company.findAll({ where: { ticker: ticker } });
}
