import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

export const Heading = styled.h1(
  ({ theme }) => css`
    font-size: ${theme.font.size['3xl']};
    font-weight: ${theme.font.weight.medium};

    ${up('md')} {
      font-size: ${theme.font.size['4xl']};
      line-height: ${theme.lineHeight['4xl']};
    }
  `,
);
