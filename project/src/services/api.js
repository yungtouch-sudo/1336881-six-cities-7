import axios from 'axios';
import {ErrorMessageType} from '../const';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;
const token = localStorage.getItem('token') ?? '';

const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

// the function will call the configured axios instance
export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (!response) {
      throw new Error(ErrorMessageType.NETWORK_ERROR);
    }

    if (response.status === HttpCode.BAD_REQUEST) {
      throw new Error(ErrorMessageType.BAD_REQUEST);
    }

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
