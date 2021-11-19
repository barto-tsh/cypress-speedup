import { TextareaHTMLAttributes } from 'react';

export type TextareaProps = {
  label?: string;
  count?: number;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
