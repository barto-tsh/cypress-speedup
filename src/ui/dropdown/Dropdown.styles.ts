import styled, { css } from 'styled-components';

import { Elevation as ElevationBase } from 'ui/elevation/Elevation';
import { ReactComponent as IconArrowDown } from 'assets/svg/arrow_down.svg';

export const Wrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.tuna};
`;

export const SelectBox = styled.button(
  ({ theme }) => css`
    position: relative;
    width: 100%;
    padding: 11px 32px 11px 16px;
    background-color: ${theme.color.white};
    appearance: none;
    border: 1px solid #e7ebf3;
    text-align: left;
    font-size: ${theme.font.size.sm};
    line-height: ${theme.lineHeight.base};
    color: ${theme.color.tuna};
    cursor: pointer;
  `,
);

export const Icon = styled(IconArrowDown)`
  position: absolute;
  top: 50%;
  right: 8px;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.color.darkGrey};
`;

export const Elevation = styled(ElevationBase)<{ isOpened: boolean }>`
  position: absolute;
  display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
  width: 100%;
  padding: 4px 0;
  z-index: 20;
`;

export const OptionsList = styled.ul`
  list-style-type: none;
`;

export const Option = styled.button<{ selected?: boolean }>(
  ({ theme, selected }) => css`
    width: 100%;
    display: block;
    padding: 12px 16px;
    font-size: ${theme.font.size.sm};
    font-weight: ${selected ? theme.font.weight.bold : theme.font.weight.regular};
    line-height: ${theme.lineHeight.base};
    appearance: none;
    border: none;
    background: none;
    cursor: pointer;
    text-align: left;
    color: ${theme.color.tuna};

    & ~ input {
      display: none;
    }
  `,
);
