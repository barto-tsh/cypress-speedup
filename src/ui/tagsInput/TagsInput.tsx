import { useState, createRef } from 'react';
import ReactTags, { Tag as TagType } from 'react-tag-autocomplete';

import { Tag } from 'ui/tag/Tag';
import { Label, Error } from 'ui/input/Input.styles';
import { useDebounce } from 'hooks/useDebounce/useDebounce';
import { useQuery } from 'hooks/useQuery/useQuery';
import { getTagsAction } from 'api/actions/tag/tagActions';
import { GetTagsResponse } from 'api/actions/tag/tagActions.types';
import { TagsOrdering } from 'api/actions/tag/tagActions.types';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';

import { TagSuggestions } from './tagSuggestions/TagSuggestions';
import { TagsInputProps } from './TagsInput.types';
import * as Styled from './TagsInput.styles';

export const TagsInput = ({
  tags,
  onAddition,
  label,
  disabled,
  error,
  onInput,
  withSuggestions,
  ...props
}: TagsInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const { formatMessage } = useLocale();
  const searchPhrase = useDebounce<string>(inputValue, 300);
  const reactTagsRef = createRef<ReactTags>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tagsRef = reactTagsRef as any; //Workaround for missing ref type in react-tag-autocomplete

  const { data, isFetching } = useQuery<GetTagsResponse>(
    getTagsAction('tag-suggestions', {
      per_page: 10,
      search: searchPhrase,
      ordering: TagsOrdering.TRENDING_DESC,
    }),
    {
      enabled: !!searchPhrase,
      keepPreviousData: !!searchPhrase,
    },
  );

  const tagSuggestions =
    data?.results.map(({ tag }) => tag).filter((tag) => !tags?.map(({ name }) => name).includes(tag)) || [];

  const handleInput = (value: string) => {
    if (onInput) {
      onInput(value);
    }
    setInputValue(value);
  };

  const handleAddition = (tag: TagType) => {
    onAddition(tag);
    tagsRef?.current.clearInput();
    setInputValue('');
  };

  return (
    <Styled.StylesProvider disabled={disabled} isError={!!error}>
      {label && <Label>{label}</Label>}
      <ReactTags
        ref={reactTagsRef}
        tags={tags}
        tagComponent={({ tag, onDelete }) => <Tag tag={tag.name} onDelete={onDelete} />}
        onAddition={handleAddition}
        onInput={handleInput}
        suggestions={tagSuggestions.map((tag) => ({ id: tag, name: tag }))}
        minQueryLength={1}
        maxSuggestionsLength={20}
        newTagText={formatMessage({
          id: AppMessages['addModal.addNewTag'],
        })}
        allowNew
        {...props}
      />
      {withSuggestions && (
        <TagSuggestions tags={tagSuggestions} onAddition={(tag) => handleAddition({ id: tag, name: tag })} />
      )}
      {error && <Error>{error}</Error>}
      {isFetching && <Styled.Loader />}
    </Styled.StylesProvider>
  );
};
