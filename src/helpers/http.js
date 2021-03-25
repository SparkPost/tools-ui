import config from 'config/index';
import axios from 'axios';

const { authCookie, apiBase, apiRequestTimeout } = config;

const sparkpostRequest = axios.create({
  baseURL: apiBase,
  timeout: apiRequestTimeout
});

function useRefreshToken(refresh_token) {
  return sparkpostRequest({
    method: 'POST',
    url: '/authenticate',
    data: `grant_type=refresh_token&refresh_token=${refresh_token}`,
    headers: authCookie.requestHeaders
  });
}

export { sparkpostRequest, useRefreshToken };
