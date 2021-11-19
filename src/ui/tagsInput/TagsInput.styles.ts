import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

import { ReactComponent as LoaderBase } from 'assets/svg/spinner.svg';

export const StylesProvider = styled.div<{ disabled?: boolean; isError: boolean }>(
  ({ theme, disabled, isError }) => css`
    position: relative;

    .react-tags {
      position: relative;
      padding: 8px 0 0 8px;
      border: 1px solid ${isError ? theme.color.red : theme.color.grey};
      cursor: text;

      ${disabled &&
      css`
        color: ${theme.color.darkGrey};
        background-color: ${theme.color.lightGrey};
      `}
    }

    .react-tags__selected {
      display: inline;

      & > div {
        margin-right: 8px;
        margin-bottom: 8px;
      }
    }

    .react-tags__search {
      display: inline-block;
    }

    .react-tags__search-input {
      border: none;
      appearance: none;
      font-size: ${theme.font.size.sm};
      line-height: ${theme.lineHeight['2xl']};
      color: ${theme.color.tuna};
      cursor: text;
      margin-bottom: 8px;
      vertical-align: baseline;

      ${disabled &&
      css`
        color: ${theme.color.darkGrey};
        background-color: ${theme.color.lightGrey};
      `}

      :focus {
        outline: none;
      }

      ::placeholder {
        color: ${theme.color.darkGrey};
      }
    }

    .react-tags__suggestions {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      z-index: 20;

      ul {
        margin: 0 -1px;
        padding: 0;
        list-style: none;
        background-color: ${theme.color.white};
        border: 1px solid ${theme.color.grey};
        box-shadow: ${theme.shadow.lg};
        max-height: 120px;
        overflow: auto;
      }

      li {
        border-bottom: 1px solid ${theme.color.grey};
        padding: 6px 8px;
        font-size: ${theme.font.size.md};
        color: ${theme.color.tuna};

        mark {
          background: none;
          font-weight: ${theme.font.weight.bold};
        }

        &.is-active {
          background: ${theme.color.grey};
        }

        :hover {
          cursor: pointer;
          background: ${theme.color.grey};
        }
      }

      ${up('md')} {
        width: 75%;

        ul {
          border-radius: 0 0 4px 4px;
        }
      }
    }
  `,
);

export const Loader = styled(LoaderBase)`
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
`;
