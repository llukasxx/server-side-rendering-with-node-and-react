export const FETCH_USERS = "FETCH_USERS";
export const CLEAR_DATA = "CLEAR_DATA";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");
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

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};
