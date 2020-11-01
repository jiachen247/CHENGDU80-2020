import Api from "../services/Api";

export const companyActions = {
  FETCHING_COMPANY_DEETS: "FETCHING_COMPANY_DEETS",
  FETCH_COMPANY_DEETS_SUCCESS: "FETCH_COMPANY_DEETS_SUCCESS",
  FETCH_COMPANY_DEETS_FAILURE: "FETCH_COMPANY_DEETS_FAILURE",
};

export function getCompanyDetails(ticker) {
  return (dispatch) =>
    new Promise((resolve) => {
      dispatch({
        type: companyActions.FETCHING_COMPANY_DEETS,
      });

      Api.getCompanyDetails(ticker)
        .then((res) =>
          resolve(
            dispatch({
              type: companyActions.FETCH_COMPANY_DEETS_SUCCESS,
              data: res,
            })
          )
        )
        .catch((err) =>
          resolve(
            dispatch({
              type: companyActions.FETCH_COMPANY_DEETS_FAILURE,
              data: err,
            })
          )
        );
    });
}
