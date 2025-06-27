import axios, { AxiosHeaders, type AxiosRequestConfig } from 'axios';
import type { LoginResponseProps } from 'pages/Auth/api/types.ts';
import { API_URL, REFRESH_TOKEN_URL, STATUS } from './constants.ts';
import { transformAxiosHeaders } from './utils.ts';
import { router } from '../providers/RouterProvider';
import { LocalStorageKeys } from '../storage/types.ts';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const headers = AxiosHeaders.from(config.headers || {});
  const token = localStorage.getItem(LocalStorageKeys.Token);

  if (!token) {
    router.navigate({ to: '/', replace: true });
    return config;
  }

  headers.set('Authorization', `Bearer ${token}`);
  config.headers = headers;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig;
    const isRefreshTokenPath = originalRequest.url === REFRESH_TOKEN_URL;

    if (error.status === STATUS.UNAUTHORIZED && !isRefreshTokenPath) {
      localStorage.removeItem(LocalStorageKeys.Token);

      const refreshTokenResponse = await fetch(
        `${API_URL}${REFRESH_TOKEN_URL}`,
        {
          method: 'POST',
          credentials: 'include',
        }
      );

      if (refreshTokenResponse.status === STATUS.UNAUTHORIZED) {
        router.navigate({ to: '/', replace: true });
        return error;
      }

      if (refreshTokenResponse.status === STATUS.SUCCESS) {
        const refreshResponseData =
          (await refreshTokenResponse.json()) as LoginResponseProps;

        const token = refreshResponseData.accessToken;
        localStorage.setItem(LocalStorageKeys.Token, token);

        const headers = transformAxiosHeaders(originalRequest.headers);

        return await fetch(`${API_URL}${originalRequest.url}`, {
          method: originalRequest.method,
          headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
          },
          credentials: 'include',
        });
      }
    }

    if (error.status === STATUS.FORBIDDEN) {
      localStorage.removeItem(LocalStorageKeys.Token);
      router.navigate({ to: '/', replace: true });
      return error;
    }
    return error;
  }
);

export default api;
