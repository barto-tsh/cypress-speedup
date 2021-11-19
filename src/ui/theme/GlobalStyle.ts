import { createGlobalStyle, css } from 'styled-components';
import { up } from 'styled-breakpoints';

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    a {
      color: ${theme.color.blue};
      text-decoration: none;
    }

    button {
      font-family: 'Inter';
    }

    .app {
      background-color: ${theme.color.lightGrey};
      font-family: 'Inter';
      color: ${theme.color.tuna};
      min-height: 100vh;
      position: relative;
    }

    .pagination__container {
      display: flex;
      align-items: center;
      list-style: none;
    }

    .pagination__item {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-width: 24px;
      margin: 0 4px;
      height: 24px;

      & > a {
        font-size: ${theme.font.size.md};
        font-weight: ${theme.font.weight.medium};
        line-height: ${theme.lineHeight.base};
        color: ${theme.color.darkGrey};
        cursor: pointer;
        user-select: none;
      }
    }

    .pagination__item--active {
      & > a {
        color: ${theme.color.tuna};
      }
    }

    .pagination__previous,
    .pagination__next {
      display: inline-flex;
      align-items: center;

      a {
        color: ${theme.color.tuna};
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
    }

    .pagination__previous {
      margin-right: 12px;
    }

    .pagination__next {
      margin-left: 12px;
    }

    .pagination__break {
      display: inline-flex;
      justify-content: center;
      width: 24px;
      height: 24px;
      margin: 0 4px;
      user-select: none;

      a {
        color: ${theme.color.darkGrey};
      }
    }

    .pagination__nav--disabled a {
      cursor: not-allowed;
    }

    .toast-container {
      ${up('md')} {
        position: absolute;
        top: 104px;
        height: 100%;
      }
    }

    .custom-toast {
      --toastify-toast-min-height: 48px;
      --toastify-color-error: ${theme.color.red};
      --toastify-color-success: ${theme.color.lightGreen};
      --toastify-text-color-success: #225522;

      border-radius: 12px;
      font-family: 'Inter';
      font-size: ${theme.font.size.md};
      font-weight: ${theme.font.weight.medium};
      box-shadow: ${theme.shadow.lg};
      color: ${theme.color.tuna};
      padding-right: 12px;
      margin: 16px;

      ${up('md')} {
        position: sticky;
        top: 16px;
        border-radius: 16px;
        margin: 0;
      }
    }
  `,
);
