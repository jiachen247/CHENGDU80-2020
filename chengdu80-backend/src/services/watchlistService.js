import db from '../db';
const Watchlist = db.models.watchlist;

export function getWatchlist(userId) {
  return Watchlist.findAll({ where: { userid: userId } });
}

export function addToWatchlist(userId, ticker) {
  return Watchlist.create({ userid: userId, ticker: ticker });
}

export function deleteFromWatchlist(userId, ticker) {
  return Watchlist.destroy({
    where: { userid: userId, ticker: ticker },
  });
}
