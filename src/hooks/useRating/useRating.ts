import { useHistory } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { AppRoute } from 'routing/AppRoute.enum';
import { useAuth } from 'hooks/useAuth/useAuth';
import { RateArguments } from 'api/actions/entry/entryActions.types';
import { UserVote, Entry } from 'api/types/Entry.types';
import { useMutation } from 'hooks/useMutation/useMutation';
import { rateAction, removeRateAction } from 'api/actions/entry/entryActions';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';

import { ContextType, RateType } from './useRating.types';

export const useRating = (entry: Entry, userVote: UserVote) => {
  const { id } = entry;
  const history = useHistory();
  const queryClient = useQueryClient();
  const { isAuthorized } = useAuth();
  const { formatMessage } = useLocale();
  const queryIdentifier = 'entries';

  const cancelQueries = async () => await queryClient.cancelQueries(queryIdentifier);
  const invalidateQueries = () => queryClient.invalidateQueries(queryIdentifier);
  const getPreviousData = () => queryClient.getQueryData<Entry[]>(queryIdentifier);
  const setData = (data: Entry[]) => queryClient.setQueryData<Entry[]>(queryIdentifier, data);
  const handleError = (context: ContextType) => {
    toast.error(
      formatMessage({
        id: AppMessages['error.fallback'],
      }),
      {
        toastId: 'rating-error',
      },
    );
    if (context.previousData) {
      queryClient.setQueryData(queryIdentifier, context.previousData);
    }
  };

  const rateQuery = useMutation<Entry, RateArguments>(rateAction('rate-mutation', id), {
    onMutate: async ({ value }) => {
      cancelQueries();
      const previousData = getPreviousData();

      if (previousData) {
        setData(
          previousData.map((entry) => {
            if (entry.id === id) {
              return {
                ...entry,
                user_vote: value,
                score: entry.user_vote ? entry.score + 2 * Number(value) : entry.score + Number(value),
              };
            } else return entry;
          }),
        );
      }

      return { previousData };
    },
    onError: (error, args, context) => handleError(context as ContextType),
    onSettled: invalidateQueries,
  });

  const rateRemoveQuery = useMutation(removeRateAction('rate-remove-mutation', id), {
    onMutate: async () => {
      cancelQueries();
      const previousData = getPreviousData();

      if (previousData) {
        setData(
          previousData.map((entry) => {
            if (entry.id === id) {
              return {
                ...entry,
                user_vote: null,
                score: entry.user_vote === -1 ? entry.score + 1 : entry.score - 1,
              };
            } else return entry;
          }),
        );
      }

      return { previousData };
    },
    onError: (error, args, context) => handleError(context as ContextType),
    onSettled: invalidateQueries,
  });

  const rate = (rate: RateType) => {
    if (!isAuthorized) {
      history.push(AppRoute.login);
      return;
    }

    if ((userVote === -1 && rate === RateType.DOWN) || (userVote === 1 && rate === RateType.UP)) {
      rateRemoveQuery.mutateAsync(null);
    } else {
      rateQuery.mutateAsync({ value: rate === RateType.DOWN ? -1 : 1 });
    }
  };

  return { rate };
};
