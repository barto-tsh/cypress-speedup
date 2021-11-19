import { MutationKey, QueryKey } from 'react-query';

import { MutationAction } from 'api/types/MutationAction.types';
import { QueryAction } from 'api/types/QueryAction.types';

export const loginAction = (mutationKey: MutationKey): MutationAction => {
  return {
    mutationKey,
    config: {
      url: '/auth/login/',
      method: 'POST',
    },
  };
};

export const registerAction = (mutationKey: MutationKey): MutationAction => {
  return {
    mutationKey,
    config: {
      url: '/auth/register/',
      method: 'POST',
    },
  };
};

export const logoutAction = (mutationKey: MutationKey): MutationAction => {
  return {
    mutationKey,
    config: {
      url: '/auth/logout/',
      method: 'POST',
    },
  };
};

export const getCurrentUserAction = (queryKey: QueryKey): QueryAction => {
  return {
    queryKey,
    config: {
      url: '/users/me',
      method: 'GET',
    },
  };
};
