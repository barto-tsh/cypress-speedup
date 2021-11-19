import { useQuery as baseUseQuery, UseQueryOptions } from 'react-query';

import { QueryAction } from 'api/types/QueryAction.types';
import { useClient } from 'hooks/useClient/useClient';

export const useQuery = <Response = unknown>(
  { queryKey, config }: QueryAction,
  queryConfig?: UseQueryOptions<Response>,
) => {
  const client = useClient();

  return baseUseQuery<Response>(
    [queryKey, config.params],
    async () => {
      const { data } = await client(config);

      return data;
    },
    { ...queryConfig, refetchOnWindowFocus: false, retry: false },
  );
};
