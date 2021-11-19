import { HTMLAttributes, ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;
