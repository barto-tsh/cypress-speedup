import { AxiosRequestConfig } from 'axios';

import { authStorage } from 'context/auth/authStorage/AuthStorage';

export const requestSuccessInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (authStorage.accessToken) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Token ${authStorage.accessToken}`,
      },
    };
  }
  return config;
};
