import { QueryKey } from 'react-query';
import { AxiosRequestConfig } from 'axios';

export type QueryAction = {
  queryKey: QueryKey;
  config: AxiosRequestConfig;
};
