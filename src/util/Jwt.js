const KEY = "jwt";

export const saveJwt = (jwt) => {
  sessionStorage.setItem(KEY, jwt);
};

export const getJwt = () => {
  return sessionStorage.getItem(KEY);
};
