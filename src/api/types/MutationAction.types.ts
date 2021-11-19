import { MutationKey } from 'react-query';
import { AxiosRequestConfig } from 'axios';

export type MutationAction = {
  mutationKey: MutationKey;
  config: AxiosRequestConfig;
};
