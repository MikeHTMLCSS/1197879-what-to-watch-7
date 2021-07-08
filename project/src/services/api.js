import axios from 'axios';

const BACKEND_URL = 'https://7.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const token = localStorage.getItem('token') ?? '';

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });
  const onSuccess = (response) => response;
  const onFail = (error) => {
    throw error;
  };
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
