import { QueryKey, MutationKey } from 'react-query';

import { QueryAction } from 'api/types/QueryAction.types';
import { MutationAction } from 'api/types/MutationAction.types';

import { GetEntriesArguments } from './entryActions.types';

export const getEntriesAction = (queryKey: QueryKey, params?: GetEntriesArguments): QueryAction => {
  return {
    queryKey,
    config: {
      url: '/resources',
      method: 'GET',
      params,
    },
  };
};

export const rateAction = (mutationKey: MutationKey, resourceId: number): MutationAction => {
  return {
    mutationKey,
    config: {
      url: `/resources/${resourceId}/vote`,
      method: 'POST',
    },
  };
};

export const removeRateAction = (mutationKey: MutationKey, resourceId: number): MutationAction => {
  return {
    mutationKey,
    config: {
      url: `/resources/${resourceId}/vote`,
      method: 'DELETE',
    },
  };
};

export const addEntry = (mutationKey: MutationKey): MutationAction => {
  return {
    mutationKey,
    config: {
      url: '/resources',
      method: 'POST',
    },
  };
};
