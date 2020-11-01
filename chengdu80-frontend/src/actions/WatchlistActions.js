import Api from "../services/Api";

export const watchlistActions = {
  FETCHING_WATCHLIST: "FETCHING_WATCHLIST",
  FETCH_WATCHLIST_SUCCESS: "FETCH_WATCHLIST_SUCCESS",
  FETCH_WATCHLIST_FAILURE: "FETCH_WATCHLIST_FAILURE",
  UPDATING_FROM_WATCHLIST: "UPDATING_FROM_WATCHLIST",
  UPDATING_FROM_WATCHLIST_SUCCESS: "UPDATING_FROM_WATCHLIST_SUCCESS",
  UPDATING_FROM_WATCHLIST_FAILURE: "UPDATING_FROM_WATCHLIST_FAILURE",
};

export function getWatchlist(userId) {
  return (dispatch) =>
    new Promise((resolve) => {
      dispatch({
        type: watchlistActions.FETCHING_WATCHLIST,
      });

      Api.getWatchlist(userId)
        .then((res) =>
          resolve(
            dispatch({
              type: watchlistActions.FETCH_WATCHLIST_SUCCESS,
              data: res,
            })
          )
        )
        .catch((err) =>
          resolve(
            dispatch({
              type: watchlistActions.FETCH_WATCHLIST_FAILURE,
              data: err,
            })
          )
        );
    });
}

export function addStock(userId, ticker) {
  return (dispatch) =>
    new Promise((resolve) => {
      dispatch({
        type: watchlistActions.UPDATING_FROM_WATCHLIST,
      });

      Api.addStockToWatchlist(userId, ticker)
        .then((res) => {
          dispatch({
            type: watchlistActions.UPDATING_FROM_WATCHLIST_SUCCESS,
            data: res,
          });
          window.location.reload();
        })
        .catch((err) =>
          resolve(
            dispatch({
              type: watchlistActions.UPDATING_FROM_WATCHLIST_FAILURE,
              data: err,
            })
          )
        );
    });
}

export function deleteStock(userId, ticker) {
  return (dispatch) =>
    new Promise((resolve) => {
      return Api.deleteStockFromWatchlist(userId, ticker).then((res) =>
        window.location.reload()
      );
    });
}
