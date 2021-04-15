import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  email: null,
  name: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.tokenId,
        userId: action.userId,
        email: action.email,
        name: action.name,
        loading: false,
      };
    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
