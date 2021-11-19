import { ReactText, ButtonHTMLAttributes } from 'react';

export type PillButtonProps = {
  label: ReactText;
} & ButtonHTMLAttributes<HTMLButtonElement>;
