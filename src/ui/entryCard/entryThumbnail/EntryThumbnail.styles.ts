import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

export const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 8px;
  margin-top: 17px;
  margin-bottom: 16px;
  overflow: hidden;

  ${up('md')} {
    margin: 0;
    height: 96px;
    grid-column: 5 / 6;
    grid-row-start: 2;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlaceholderWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: ${theme.color.grey};
    color: ${theme.color.darkGrey};
  `,
);
