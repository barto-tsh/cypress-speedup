import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import hexRgb from 'hex-rgb';

import { RateType } from 'hooks/useRating/useRating.types';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${up('md')} {
    flex-direction: column-reverse;
    max-width: 24px;
  }
`;

export const Button = styled.button<{ vote: RateType; chosen: boolean }>(
  ({ theme, vote, chosen }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 3px;
    color: ${theme.color.blue};
    background-color: ${hexRgb(theme.color.blue, { alpha: 0.1, format: 'css' })};
    cursor: pointer;

    svg {
      flex-shrink: 0;
      width: 14px;
      height: 14px;
      pointer-events: none;
    }

    ${chosen &&
    css`
      background-color: ${vote === RateType.UP ? theme.color.lightGreen : theme.color.red};
      color: ${theme.color.white};
    `}

    ${up('md')} {
      width: 24px;
      height: 24px;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  `,
);

export const Score = styled.p(
  ({ theme }) => css`
    display: inline-block;
    min-width: 30px;
    margin: 0 8px;
    text-align: center;
    font-size: ${theme.font.size.lg};
    font-weight: ${theme.font.weight.medium};

    ${up('md')} {
      margin: 8px 0;
      font-size: ${theme.font.size['2xl']};
    }
  `,
);
