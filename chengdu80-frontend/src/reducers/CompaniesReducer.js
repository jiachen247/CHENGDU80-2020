import { companyActions } from "../actions/CompanyActions";

let {
  FETCHING_COMPANY_DEETS,
  FETCH_COMPANY_DEETS_SUCCESS,
  FETCH_COMPANY_DEETS_FAILURE,
} = companyActions;

export const initialState = {
  loading: false,
  error: null,
  details: null,
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_COMPANY_DEETS: {
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    }
    case FETCH_COMPANY_DEETS_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        details: action.data[0],
      };
    }
    case FETCH_COMPANY_DEETS_FAILURE: {
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
