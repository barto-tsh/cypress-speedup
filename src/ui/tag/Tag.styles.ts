import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

import { ReactComponent as IconCancel } from 'assets/svg/cancel.svg';

export const Wrapper = styled.div<{ selected?: boolean }>(
  ({ theme, selected }) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    border-radius: 12px;
    background-color: ${selected ? theme.color.lightBlue : theme.color.grey};
    overflow: hidden;
  `,
);

export const Tag = styled.button<{ withIcon: boolean; trending?: boolean; clickable?: boolean }>(
  ({ theme, withIcon, trending, clickable }) => css`
    display: inline-flex;
    align-items: center;
    appearance: none;
    border: none;
    background: none;
    padding: ${withIcon ? '4px 33px 4px 16px' : trending ? '8px 16px' : '4px 16px'};
    cursor: ${clickable ? 'pointer' : 'default'};

    & > p {
      font-family: 'Inter';
      color: ${theme.color.darkGrey};
      font-size: ${theme.font.size.xs};
      line-height: ${theme.lineHeight.base};
      font-weight: ${theme.font.weight.medium};
    }

    ${up('md')} {
      padding: ${withIcon ? '4px 33px 4px 16px' : '4px 16px'};
    }
  `,
);

export const DeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  display: inline-flex;
  border: none;
  line-height: 16px;
  color: ${({ theme }) => theme.color.darkGrey};
  appearance: none;
  cursor: pointer;
  transform: translateY(-50%);
`;

export const Icon = styled(IconCancel)`
  width: 16px;
  height: 16px;
`;
