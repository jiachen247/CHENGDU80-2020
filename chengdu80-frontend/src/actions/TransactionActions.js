import Api from "../services/Api";

export const transactionActions = {
  FETCHING_TRANSACTIONS: "FETCHING_TRANSACTIONS",
  FETCH_TRANSACTIONS_SUCCESS: "FETCH_TRANSACTIONS_SUCCESS",
  FETCH_TRANSACTIONS_FAILURE: "FETCH_TRANSACTIONS_FAILURE",
};

export function getTransactions(ticker) {
  return (dispatch) =>
    new Promise((resolve) => {
      dispatch({
        type: transactionActions.FETCHING_TRANSACTIONS,
      });

      Api.getTransactions(ticker)
        .then((res) =>
          resolve(
            dispatch({
              type: transactionActions.FETCH_TRANSACTIONS_SUCCESS,
              data: res,
            })
          )
        )
        .catch((err) =>
          resolve(
            dispatch({
              type: transactionActions.FETCH_TRANSACTIONS_FAILURE,
              data: err,
            })
          )
        );
    });
}
