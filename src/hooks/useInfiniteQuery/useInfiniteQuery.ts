import { useInfiniteQuery as baseUseInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QueryAction } from 'api/types/QueryAction.types';
import { useClient } from 'hooks/useClient/useClient';

export const useInfiniteQuery = <Response extends { next: string | null }>(
  { queryKey, config }: QueryAction,
  queryConfig: UseInfiniteQueryOptions<Response, AxiosError>,
) => {
  const client = useClient();

  return baseUseInfiniteQuery<Response, AxiosError>(
    [queryKey, config.params],
    async ({ pageParam = config.params.page }) => {
      const { data } = await client({
        ...config,
        params: { ...config.params, page: pageParam },
      });

      return data;
    },
    { ...queryConfig, refetchOnWindowFocus: false, retry: false, refetchOnReconnect: false },
  );
};
