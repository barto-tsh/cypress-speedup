import { useMutation as baseUseMutation, UseMutationOptions } from 'react-query';
import { AxiosError } from 'axios';

import { useClient } from 'hooks/useClient/useClient';
import { MutationAction } from 'api/types/MutationAction.types';

export const useMutation = <Response = unknown, Variables = unknown>(
  { mutationKey, config }: MutationAction,
  mutationConfig?: UseMutationOptions<Response, AxiosError, Variables>,
) => {
  const client = useClient();

  return baseUseMutation<Response, AxiosError, Variables>({
    mutationKey,
    mutationFn: async (variables) => {
      const { data } = await client({ ...config, data: variables });

      return data;
    },
    ...mutationConfig,
  });
};
