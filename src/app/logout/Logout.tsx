import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';

import { useAuth } from 'hooks/useAuth/useAuth';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';
import { AppRoute } from 'routing/AppRoute.enum';

export const Logout = () => {
  const { logoutQuery } = useAuth();
  const { formatMessage } = useLocale();

  useEffect(() => {
    logoutQuery.mutateAsync(undefined, {
      onSuccess: () => {
        toast.success(
          formatMessage({
            id: AppMessages['logout.success'],
          }),
        );
      },
      onError: () => {
        toast.error(
          formatMessage({
            id: AppMessages['error.fallback'],
          }),
        );
      },
    });
  }, []);

  return <Redirect to={AppRoute.home} />;
};
