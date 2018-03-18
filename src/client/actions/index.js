export const FETCH_USERS = "fetch_users";
export const CLEAR_DATA = "CLEAR_DATA";

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
