import { Tag } from 'ui/tag/Tag';

import { TagSuggestionsProps } from './TagSuggestions.types';
import * as Styled from './TagSuggestions.styles';

export const TagSuggestions = ({ tags, onAddition }: TagSuggestionsProps) => {
  return (
    <Styled.Wrapper shouldBeDisplayed={!!tags?.length}>
      {tags?.map((tag) => (
        <Tag key={tag} tag={tag} onClick={onAddition} />
      ))}
    </Styled.Wrapper>
  );
};
