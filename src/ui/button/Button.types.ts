import { ReactNode, ButtonHTMLAttributes } from 'react';

export enum ButtonColor {
  blue = 'blue',
  red = 'red',
  white = 'white',
  transparent = 'transparent',
}

export type ButtonProps = {
  color: ButtonColor;
  children: ReactNode;
  withIcon?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
