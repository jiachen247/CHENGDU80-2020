import { combineReducers } from "redux";
import watchlistReducer from "./WatchlistReducer";
import transactionReducer from "./TransactionReducer";
import companyReducer from "./CompaniesReducer";

export default combineReducers({
  watchlist: watchlistReducer,
  transaction: transactionReducer,
  companyDetails: companyReducer,
});
