import { QueryKey } from 'react-query';

import { QueryAction } from 'api/types/QueryAction.types';

import { GetTagsArguments } from './tagActions.types';

export const getTagsAction = (queryKey: QueryKey, params?: GetTagsArguments): QueryAction => {
  return {
    queryKey,
    config: {
      url: '/tags',
      method: 'GET',
      params,
    },
  };
};
