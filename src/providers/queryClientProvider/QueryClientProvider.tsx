import { useEffect } from 'react';
import { QueryClient, QueryClientProvider as QueryClientProviderBase } from 'react-query';
import { toast } from 'react-toastify';

import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';

import { QueryClientProviderProps } from './QueryClientProvider.types';

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  const { formatMessage, locale } = useLocale();

  const onError = () => {
    toast.error(
      formatMessage({
        id: AppMessages['error.fallback'],
      }),
      {
        toastId: 'error-fallback',
      },
    );
  };

  useEffect(() => {
    queryClient.setDefaultOptions({
      queries: {
        onError,
      },
    });
  }, [locale]);

  return <QueryClientProviderBase client={queryClient}>{children}</QueryClientProviderBase>;
};
