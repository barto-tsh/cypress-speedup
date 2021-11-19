import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

import { Input } from 'ui/input/Input';

export const SearchForm = styled.form<{ isVisible: boolean }>(
  ({ isVisible }) => css`
    position: absolute;
    left: 0;
    top: 0;
    display: ${isVisible ? 'flex' : 'none'};
    flex: 1;
    padding: 0 16px;
    width: 100%;
    height: 100%;

    ${up('md')} {
      height: auto;
      width: auto;
      position: relative;
      display: flex;
      max-width: 600px;
      margin: 0 32px;
      padding: 0;
    }
  `,
);

export const SearchInput = styled(Input)(
  ({ theme }) => css`
    width: 100%;
    height: 100%;

    & > input {
      border: none;
      height: 100%;
      padding: 0 36px 0 0;

      &:focus {
        border: none;
      }
    }

    ${up('md')} {
      & > input {
        height: auto;
        padding: 11px 36px 11px 16px;
        border: 1px solid ${theme.color.grey};

        &:focus {
          border: 1px solid ${theme.color.blue};
        }
      }
    }
  `,
);

const BaseButton = styled.button<{ isVisible: boolean }>(
  ({ theme, isVisible }) => css`
    position: absolute;
    right: 16px;
    top: 50%;
    display: ${isVisible ? 'flex' : 'none'};
    background: none;
    border: none;
    width: 32px;
    height: 32px;
    transform: translateY(-50%);
    cursor: pointer;
    color: ${theme.color.tuna};

    ${up('md')} {
      right: 8px;
      width: 24px;
      height: 24px;
      color: ${theme.color.darkGrey};
    }

    & > svg {
      width: 100%;
      height: 100%;
    }
  `,
);

export const SubmitButton = styled(BaseButton)`
  ${up('md')} {
    display: flex;
  }
`;

export const CloseButton = styled(BaseButton)`
  ${up('md')} {
    display: none;
  }
`;
