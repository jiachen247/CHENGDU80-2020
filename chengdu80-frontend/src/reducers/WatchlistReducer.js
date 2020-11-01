import { watchlistActions } from "../actions/WatchlistActions";

let {
  FETCHING_WATCHLIST,
  FETCH_WATCHLIST_SUCCESS,
  FETCH_WATCHLIST_FAILURE,
  UPDATING_FROM_WATCHLIST,
  UPDATING_FROM_WATCHLIST_FAILURE,
  UPDATING_FROM_WATCHLIST_SUCCESS,
} = watchlistActions;

export const initialState = {
  loading: false,
  updating: false,
  error: null,
  watchlist: [],
  firstLoad: true,
};

export default function watchlistReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WATCHLIST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    }
    case FETCH_WATCHLIST_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        watchlist: action.data,
      };
    }
    case FETCHING_WATCHLIST: {
      return {
        ...state,
        error: null,
        loading: true,
        firstLoad: false,
      };
    }
    case UPDATING_FROM_WATCHLIST: {
      // window.location.reload(false);
      return {
        ...state,
        updating: true,
      };
    }
    case UPDATING_FROM_WATCHLIST_SUCCESS: {
      // window.location.reload(false);
      return {
        ...state,
        updating: false,
      };
    }
    case UPDATING_FROM_WATCHLIST_FAILURE: {
      return {
        ...state,
        updating: false,
      };
    }
    default:
      return state;
  }
}
