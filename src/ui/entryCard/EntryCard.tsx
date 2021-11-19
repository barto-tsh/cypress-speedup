import { useQueryParam, ArrayParam, NumberParam } from 'use-query-params';

import { Tag } from 'ui/tag/Tag';
import { useRating } from 'hooks/useRating/useRating';

import { EntryCardProps } from './EntryCard.types';
import * as Styled from './EntryCard.styles';
import { EntryThumbnail } from './entryThumbnail/EntryThumbnail';

export const EntryCard = ({ entry }: EntryCardProps) => {
  const { id, title, resource_url, description, thumbnail, score, tags, user, user_vote } = entry;
  const { rate } = useRating(entry, user_vote);
  const [selectedTags, setSelectedTags] = useQueryParam('tags', ArrayParam);
  const [page, setPage] = useQueryParam('page', ArrayParam);

  const handleTagSelection = (newTag: string) => {
    if (selectedTags?.includes(newTag)) {
      setSelectedTags([...selectedTags].filter((tag) => tag !== newTag));
    } else {
      setSelectedTags([...(selectedTags || []), newTag]);
    }
    setPage(undefined);
  };

  return (
    <Styled.Card data-testid="entry-card">
      <Styled.Rating score={score} userVote={user_vote} onRate={rate} />
      <EntryThumbnail src={thumbnail} alt={title} />
      <Styled.Avatar size={24} user={user} />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Link url={resource_url} />
      {!!tags?.length && (
        <Styled.TagsWrapper>
          {tags.map((tag) => (
            <Tag
              tag={tag}
              onClick={() => handleTagSelection(tag)}
              selected={selectedTags?.includes(tag)}
              key={`entry-${id}-tag-${tag}`}
            />
          ))}
        </Styled.TagsWrapper>
      )}
    </Styled.Card>
  );
};
