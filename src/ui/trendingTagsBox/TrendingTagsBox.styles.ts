import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

import { Card } from 'ui/card/Card';
import { Heading as HeadingBase } from 'ui/heading/Heading';

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  border-radius: 0;
  padding: 24px 0 8px;
  height: min-content;
  max-height: calc(100vh - 48px);

  ${up('md')} {
    border-radius: 16px;
  }
`;

export const Heading = styled(HeadingBase)(
  ({ theme }) => css`
    padding: 0 16px;
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.medium};
    line-height: ${theme.lineHeight['2xl']};

    ${up('md')} {
      padding: 0 24px;
      font-size: ${theme.font.size.base};
    }
  `,
);

export const TagsWrapper = styled.div<{ isLoading?: boolean }>(
  ({ isLoading }) => css`
    overflow: auto;
    padding: 16px 8px 16px 16px;
    white-space: nowrap;

    ${isLoading &&
    css`
      display: flex;
      justify-content: center;
      padding: 16px;
    `}

    & > svg {
      width: 32px;
      height: 32px;
    }

    & > div {
      margin-right: 8px;
    }

    ${up('md')} {
      display: flex;
      flex-wrap: wrap;
      padding: 16px 16px 16px 24px;

      & > div {
        margin-bottom: 8px;
      }

      & > svg {
        width: 38px;
        height: 38px;
      }
    }
  `,
);
