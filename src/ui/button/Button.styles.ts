import styled, { css, DefaultTheme } from 'styled-components';

import { ReactComponent as IconPlus } from 'assets/svg/plus.svg';

import { ButtonProps, ButtonColor } from './Button.types';

const getButtonStyles = (theme: DefaultTheme, color: ButtonProps['color']) => {
  const { blue, white, red, tuna } = theme.color;
  switch (color) {
    case ButtonColor.blue:
      return css`
        background-color: ${blue};
        color: ${white};

        :disabled {
          opacity: 0.5;
        }
      `;
    case ButtonColor.red:
      return css`
        background-color: ${red};
        color: ${white};

        :disabled {
          opacity: 0.5;
        }
      `;
    case ButtonColor.white:
      return css`
        padding: 16px 48px;
        background-color: ${white};
        color: ${blue};
      `;
    case ButtonColor.transparent:
      return css`
        border: 1px solid ${tuna};
        background-color: transparent;
        color: ${tuna};
      `;
  }
};

export const Button = styled.button<ButtonProps>(
  ({ theme, color, withIcon }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${withIcon ? '12px 28px 12px 24px' : '8px 32px'};
    border: none;
    border-radius: 4px;
    font-size: ${theme.font.size.sm};
    line-height: ${withIcon ? theme.lineHeight.base : theme.lineHeight['2xl']};
    font-weight: ${theme.font.weight.semiBold};
    white-space: nowrap;
    cursor: pointer;
    ${getButtonStyles(theme, color)}
  `,
);

export const Icon = styled(IconPlus)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;
