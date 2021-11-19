import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ shouldBeDisplayed: boolean }>(
  ({ theme, shouldBeDisplayed }) => css`
    display: ${shouldBeDisplayed ? 'flex' : 'none'};
    flex-wrap: wrap;
    border: 1px solid ${theme.color.grey};
    border-top: none;
    padding: 8px 0 0 8px;

    & > div {
      margin-right: 8px;
      margin-bottom: 8px;
    }
  `,
);
