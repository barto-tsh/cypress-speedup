import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input<{ error?: boolean }>(
  ({ theme, error }) => css`
    border: 1px solid ${error ? theme.color.red : theme.color.grey};
    border-radius: 0;
    font-size: ${theme.font.size.sm};
    line-height: ${theme.lineHeight.base};
    padding: 11px 8px;
    appearance: none;

    :focus {
      outline: none;
      border: 1px solid ${theme.color.blue};
    }

    :disabled {
      color: ${theme.color.darkGrey};
      background-color: ${theme.color.lightGrey};
    }

    ::placeholder {
      color: ${theme.color.darkGrey};
    }
  `,
);

export const Label = styled.label(
  ({ theme }) => css`
    display: inline-block;
    margin-bottom: 8px;
    font-size: ${theme.font.size.md};
    line-height: ${theme.lineHeight.base};
    font-weight: ${theme.font.weight.medium};
  `,
);

export const Count = styled.span(
  ({ theme }) => css`
    position: absolute;
    right: 0;
    font-size: 11px;
    line-height: ${theme.lineHeight.base};
    color: ${theme.color.tuna};
  `,
);

export const Error = styled.p(
  ({ theme }) => css`
    position: absolute;
    top: calc(100% + 2px);
    font-size: ${theme.font.size.xs};
    color: ${theme.color.red};
  `,
);
