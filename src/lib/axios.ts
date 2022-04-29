import { BASE_URL } from './../constants/url';
import axios_default from 'axios';

export const _axios = axios_default.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
