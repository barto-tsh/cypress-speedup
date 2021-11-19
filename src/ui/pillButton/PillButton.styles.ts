import styled, { css } from 'styled-components';

import { ReactComponent as IconArrowLeft } from 'assets/svg/arrow_left.svg';

export const Button = styled.button(
  ({ theme }) => css`
    display: inline-flex;
    align-items: center;
    border: none;
    border-radius: 20px;
    background-color: rgba(196, 196, 196, 0.1);
    padding: 4px 16px;
    color: ${theme.color.tuna};
  `,
);

export const Icon = styled(IconArrowLeft)`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const Label = styled.span(
  ({ theme }) => css`
    font-size: ${theme.font.size.sm};
    line-height: ${theme.lineHeight.base};
  `,
);
