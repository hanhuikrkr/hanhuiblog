import decode from 'jwt-decode';

const TOKEN_KEY = 'SYS_TOKEN';
const USER_KEY = 'HANHUIBLOG_USER';

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_KEY);
};

export const saveToken = (data: string) => {
  window.localStorage.setItem(TOKEN_KEY, data);
};

export const removeToken = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};

export const decodeToken = () => {
  let params = window.localStorage.getItem(USER_KEY);
  if (params !== null) return decode(params);
  else return null;
};

export const getUser = () => {
  let params = window.localStorage.getItem(USER_KEY);
  if (params !== null) return JSON.parse(params);
  else return null;
};

export const saveUser = (data: any) => {
  window.localStorage.setItem(USER_KEY, JSON.stringify(data));
};

export const removeUser = () => {
  console.log('删除本地用户信息');
  window.localStorage.removeItem(USER_KEY);
};

export default { getToken, saveToken, removeToken, decodeToken, getUser, saveUser, removeUser };
