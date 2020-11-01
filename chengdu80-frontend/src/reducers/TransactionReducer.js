import { transactionActions } from "../actions/TransactionActions";

let {
  FETCHING_TRANSACTIONS,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILURE,
} = transactionActions;

export const initialState = {
  loading: false,
  error: null,
  transactions: [],
};

export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    }
    case FETCH_TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        transactions: action.data,
      };
    }
    case FETCHING_TRANSACTIONS: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    default:
      return state;
  }
}
