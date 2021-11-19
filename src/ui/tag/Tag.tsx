import { MouseEvent } from 'react';

import { TagProps } from './Tag.types';
import * as Styled from './Tag.styles';

export const Tag = ({ tag, trending, selected, onDelete, onClick }: TagProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(tag);
    return e;
  };

  return (
    <Styled.Wrapper selected={selected}>
      <Styled.Tag
        type="button"
        trending={trending}
        withIcon={!!onDelete}
        onClick={handleClick}
        clickable={!!onClick}
        data-testid="tag"
      >
        <p>#{tag}</p>
      </Styled.Tag>
      {onDelete && (
        <Styled.DeleteButton onClick={onDelete} data-testid="tag-delete-button">
          <Styled.Icon />
        </Styled.DeleteButton>
      )}
    </Styled.Wrapper>
  );
};
