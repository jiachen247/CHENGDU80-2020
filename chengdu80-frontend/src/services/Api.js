import Client from "./Client";
const client = new Client({});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getWatchlist: (userId) => client.get(`/watchlist/${userId}`),
  deleteStockFromWatchlist: (userId, ticker) =>
    client.post(`/watchlist/delete/${userId}/${ticker}`),
  addStockToWatchlist: (userId, ticker) =>
    client.post(`/watchlist/add/${userId}/${ticker}`),
  getTransactions: (ticker) => client.get(`/transaction/${ticker}`),
  getCompanyDetails: (ticker) => client.get(`/company/${ticker}`),
};
