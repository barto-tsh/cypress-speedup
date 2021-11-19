import styled, { css } from 'styled-components';

export const Elevation = styled.div(
  ({ theme }) => css`
    background-color: ${theme.color.white};
    box-shadow: ${theme.shadow.lg};
  `,
);
