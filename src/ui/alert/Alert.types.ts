import { HTMLAttributes, ReactNode } from 'react';

export type AlertProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;
