import axios from 'axios';
import {ActionCreator} from '../store/action.js';
import {AuthorizationStatus} from '../consts.js';

const BACKEND_URL = 'https://7.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

const token = localStorage.getItem('token') ?? '';

export const createAPI = (getStore) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });
  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.status === HttpCode.UNAUTHORIZED) {
      getStore().dispatch(ActionCreator.requireAutorization(AuthorizationStatus.NOT_AUTH));
    }
    throw error;
  };
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
