import { useQueryParam, ArrayParam, NumberParam } from 'use-query-params';

import { useQuery } from 'hooks/useQuery/useQuery';
import { getTagsAction } from 'api/actions/tag/tagActions';
import { GetTagsResponse, TagsOrdering } from 'api/actions/tag/tagActions.types';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';
import { Tag } from 'ui/tag/Tag';
import { ReactComponent as Loader } from 'assets/svg/spinner.svg';

import * as Styled from './TrendingTagsBox.styles';
import { TrendingTagsBoxProps } from './TrendingTagsBox.types';

export const TrendingTagsBox = ({ className }: TrendingTagsBoxProps) => {
  const { formatMessage } = useLocale();
  const [tags, setTags] = useQueryParam('tags', ArrayParam);
  const [page, setPage] = useQueryParam('page', NumberParam);

  const { data, isLoading } = useQuery<GetTagsResponse>(
    getTagsAction('trending-tags', {
      per_page: 9,
      ordering: TagsOrdering.TRENDING_DESC,
    }),
  );
  const trending = data?.results || [];

  const handleSelect = (newTag: string) => {
    if (tags?.includes(newTag)) {
      setTags([...tags].filter((tag) => tag !== newTag));
    } else {
      setTags([...(tags || []), newTag]);
    }
    setPage(undefined);
  };

  return (
    <Styled.Wrapper className={className}>
      <Styled.Heading as="h3">
        {formatMessage({
          id: AppMessages['home.trendingTags'],
        })}
      </Styled.Heading>
      <Styled.TagsWrapper isLoading={isLoading}>
        {isLoading && <Loader />}
        {!isLoading &&
          trending.length > 0 &&
          trending.map(({ tag }) => (
            <Tag tag={tag} trending selected={tags?.includes(tag)} onClick={handleSelect} key={tag} />
          ))}
      </Styled.TagsWrapper>
    </Styled.Wrapper>
  );
};
