import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const http = axios.create({
  baseURL: publicRuntimeConfig.API,
  headers: {
    'Content-Type': 'application/json',
  },
});
