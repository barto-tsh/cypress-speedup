import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import hexRgb from 'hex-rgb';

import { ReactComponent as IconLinkBase } from 'assets/svg/link.svg';

export const Link = styled.a(
  ({ theme }) => css`
    position: relative;
    display: inline-block;
    overflow: hidden;
    padding: 8px;
    padding-left: 36px;
    border-radius: 8px;
    background-color: ${hexRgb(theme.color.blue, { alpha: 0.08, format: 'css' })};
    font-size: ${theme.font.size.sm};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.color.blue};
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${up('md')} {
      padding: 0;
      padding-right: 20px;
      border-radius: 0;
      background-color: unset;
      font-size: ${theme.font.size.md};
      line-height: ${theme.lineHeight.base};
    }
  `,
);

export const IconLink = styled(IconLinkBase)`
  position: absolute;
  left: 8px;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);

  ${up('md')} {
    left: auto;
    right: 0;
    width: 16px;
    height: 16px;
  }
`;
