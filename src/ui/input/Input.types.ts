import { ReactText, InputHTMLAttributes } from 'react';

export type InputProps = {
  label?: ReactText;
  count?: number;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
