import axios from "axios";

export const FETCH_USERS = "fetch_users";
export const CLEAR_DATA = "CLEAR_DATA";

export const fetchUsers = () => async dispatch => {
  const res = await axios.get("http://react-ssr-api.herokuapp.com/users");
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const clearData = () => {
  return {
    type: CLEAR_DATA
  };
};
