import { useState, useMemo, useEffect } from 'react';
import { useQueryParams, NumberParam, ArrayParam, StringParam, createEnumParam } from 'use-query-params';
import { useWindowWidth } from '@react-hook/window-size';

import { useQuery } from 'hooks/useQuery/useQuery';
import { useAuth } from 'hooks/useAuth/useAuth';
import { useLocale } from 'hooks/useLocale/useLocale';
import { EntryCard } from 'ui/entryCard/EntryCard';
import { AppMessages } from 'i18n/messages';
import { getEntriesAction } from 'api/actions/entry/entryActions';
import { Page } from 'ui/page/Page';
import { PaginationParam } from 'ui/pagination/Pagination.types';
import { Entry } from 'api/types/Entry.types';
import { GetEntriesResponse, EntriesOrdering } from 'api/actions/entry/entryActions.types';
import { Layout } from 'ui/layout/Layout';
import { ButtonColor } from 'ui/button/Button.types';
import { AddModal } from 'ui/addModal/AddModal';
import { Heading } from 'ui/heading/Heading';
import { NoEntries } from 'ui/noEntries/NoEntries';

import * as Styled from './Home.styles';

export const ENTRIES_PER_PAGE = 15;

export const Home = () => {
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([]);
  const windowWidth = useWindowWidth();
  const { formatMessage } = useLocale();
  const { isAuthorized } = useAuth();
  const sortOptions = useMemo(
    () => [
      {
        id: 'sort-created-desc',
        value: EntriesOrdering.CREATED_DESC,
        label: formatMessage({
          id: AppMessages['sort.createdAtDesc'],
        }),
      },
      {
        id: 'sort-created-asc',
        value: EntriesOrdering.CREATED_ASC,
        label: formatMessage({
          id: AppMessages['sort.createdAtAsc'],
        }),
      },
      {
        id: 'sort-score-desc',
        value: EntriesOrdering.SCORE_DESC,
        label: formatMessage({
          id: AppMessages['sort.scoreDesc'],
        }),
      },
      {
        id: 'sort-score-asc',
        value: EntriesOrdering.SCORE_ASC,
        label: formatMessage({
          id: AppMessages['sort.scoreAsc'],
        }),
      },
    ],
    [formatMessage],
  );
  const isDesktop = useMemo(() => windowWidth >= 768, [windowWidth]);

  const [queryParams, setQueryParams] = useQueryParams({
    page: NumberParam,
    tags: ArrayParam,
    search: StringParam,
    sort: createEnumParam<EntriesOrdering>(Object.values(EntriesOrdering)),
  });
  const { page, tags, search, sort } = queryParams;

  const { data, isLoading, isFetching, isError, refetch } = useQuery<GetEntriesResponse>(
    getEntriesAction('entries', {
      per_page: ENTRIES_PER_PAGE,
      page: page || undefined,
      tags: (tags as string[]) || undefined,
      search: search || undefined,
      order: sort || undefined,
    }),
    {
      keepPreviousData: true,
      refetchOnReconnect: false,
      onSuccess: (data) => {
        if (isDesktop || page === undefined) setEntries(data.results);
        else setEntries([...entries, ...data.results]);
      },
    },
  );

  const entriesCount = data?.count;
  const pagesCount = entriesCount ? Math.ceil(entriesCount / ENTRIES_PER_PAGE) : 1;
  const hasNextPage = pagesCount > (page || 1);

  const handlePageChange = ({ selected }: PaginationParam) => {
    setQueryParams({ page: selected + 1 });
    window.scrollTo({ top: 0 });
  };

  const handleAddition = async () => {
    await refetch();
    setQueryParams({ page: undefined, sort: undefined, tags: undefined, search: undefined });
    setIsAddModalOpened(false);
  };

  useEffect(() => {
    if (entries.length > ENTRIES_PER_PAGE) setEntries(entries.slice(-ENTRIES_PER_PAGE));
  }, [isDesktop]);

  useEffect(() => {
    if (sort) setQueryParams({ page: undefined });
  }, [sort]);

  return (
    <Layout>
      <Page>
        <Styled.ContentWrapper>
          <Styled.HeadingWrapper>
            <Heading>
              {formatMessage({
                id: AppMessages[search ? 'home.searchResults' : 'home.allEntries'],
              })}
            </Heading>
            {isAuthorized && (
              <Styled.AddButton
                color={ButtonColor.blue}
                withIcon
                onClick={() => setIsAddModalOpened(true)}
                data-testid="add-new-button"
              >
                {formatMessage({
                  id: AppMessages['home.addEntry'],
                })}
              </Styled.AddButton>
            )}
            <Styled.Dropdown
              onChange={(sort: EntriesOrdering) => setQueryParams({ sort })}
              options={sortOptions}
              selectedValue={sort}
            />
          </Styled.HeadingWrapper>
          <Styled.EntriesWrapper>
            <Styled.Entries>
              {entries?.map((entry) => (
                <EntryCard entry={entry} key={entry.id} />
              ))}
            </Styled.Entries>
            {isDesktop && !!entries?.length && (
              <Styled.Pagination
                forcePage={page ? page - 1 : 0}
                pageCount={pagesCount}
                onPageChange={handlePageChange}
              />
            )}
            {(isFetching || isError) && isDesktop && (
              <Styled.LoaderOverlay visible={!!entries?.length}>
                <Styled.Loader />
              </Styled.LoaderOverlay>
            )}
            {!isLoading && !isFetching && !entries?.length && (
              <NoEntries label={formatMessage({ id: AppMessages['global.noEntriesFound'] })} />
            )}
            {!isDesktop && hasNextPage && !isFetching && !isError && (
              <Styled.LoadMoreButton
                color={ButtonColor.white}
                onClick={() => setQueryParams({ page: (page || 1) + 1 })}
              >
                {formatMessage({
                  id: AppMessages['home.loadMore'],
                })}
              </Styled.LoadMoreButton>
            )}
            {isFetching && !isDesktop && <Styled.Loader />}
          </Styled.EntriesWrapper>
          <Styled.TrendingTags />
        </Styled.ContentWrapper>
      </Page>
      {isAddModalOpened && (
        <AddModal
          isFetchingEntries={isFetching}
          onClose={() => setIsAddModalOpened(false)}
          onAddition={handleAddition}
        />
      )}
    </Layout>
  );
};
