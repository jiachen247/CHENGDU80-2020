import companies from "../data/companies";

export function getCompany(ticker) {
  if (ticker === undefined || ticker === null) {
    return null;
  }
  ticker = ticker.toLowerCase();

  for (let c of companies) {
    if (c.ticker.toLowerCase() === ticker) {
      return c;
    }
  }
  return null;
}

export function getCompanyName(ticker) {
  let company = getCompany(ticker);
  if (company === null || company === undefined) {
    return "";
  } else {
    return company.name;
  }
}
