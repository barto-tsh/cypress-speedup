import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

import { Avatar as AvatarBase } from 'ui/avatar/Avatar';
import { Card as CardBase } from 'ui/card/Card';
import { Rating as RatingBase } from 'ui/rating/Rating';

import { EntryLink as LinkBase } from './entryLink/EntryLink';

export const Card = styled(CardBase)`
  display: grid;
  grid-template-columns: 100%;
  padding: 17px 16px 16px 16px;
  min-width: 0;

  ${up('md')} {
    align-items: start;
    padding: 32px 24px 24px 0;
    grid-template-columns: 86px auto minmax(auto, 1fr) 32px 152px;
    grid-template-rows: repeat(4, auto);
  }
`;

export const Title = styled.h2(
  ({ theme }) => css`
    margin: 8px 0 4px 0;
    font-size: ${theme.font.size.base};
    line-height: ${theme.lineHeight['2xl']};
    font-weight: ${theme.font.weight.medium};

    ${up('md')} {
      margin: 0;
      margin-bottom: 8px;
      grid-row: 1 / 2;
      grid-column: 2 / 4;
      font-size: ${theme.font.size.xl};
    }
  `,
);

export const Description = styled.p(
  ({ theme }) => css`
    margin-bottom: 16px;
    font-size: ${theme.font.size.xs};
    line-height: ${theme.lineHeight.lg};
    color: ${theme.color.darkGrey};

    ${up('md')} {
      grid-row-start: 2;
      grid-column: 2 / 4;
      font-size: ${theme.font.size.md};
      line-height: ${theme.lineHeight.xl};
    }
  `,
);

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;

  ${up('md')} {
    margin-top: 24px;
    grid-row-start: 4;
    grid-column: 2 / 4;
  }
`;

export const Avatar = styled(AvatarBase)`
  ${up('md')} {
    align-self: center;
    grid-row-start: 3;
    grid-column: 3 / 4;
  }
`;

export const Link = styled(LinkBase)`
  ${up('md')} {
    margin-right: 24px;
    align-self: center;
    grid-row-start: 3;
    grid-column: 2 / 3;
  }
`;

export const Rating = styled(RatingBase)`
  ${up('md')} {
    justify-self: center;
    grid-row-start: 2;
    grid-column: 1 / 2;
  }
`;
