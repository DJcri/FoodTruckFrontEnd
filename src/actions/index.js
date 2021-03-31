export const SET_LOCATION = "SET_LOCATION";
export const SET_TOKEN = "SET_TOKEN";
export const SET_ROLE = "SET_ROLE";

export const setLocation = (location) => {
  return { type: SET_LOCATION, payload: location };
};

export const setToken = (token) => {
  return { type: SET_TOKEN, payload: token };
};

export const setRole = (role) => {
  return { type: SET_ROLE, payload: role };
};
