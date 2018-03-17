import { FETCH_USERS, CLEAR_DATA } from "./../actions";

const initialState = {
  usersList: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        usersList: action.payload.data,
        loaded: true
      };
    case CLEAR_DATA:
      return initialState;
    default:
      return state;
  }
};
