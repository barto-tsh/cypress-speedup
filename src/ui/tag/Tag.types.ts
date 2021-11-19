import { MouseEvent } from 'react';

export type TagProps = {
  tag: string;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  trending?: boolean;
  selected?: boolean;
  onDelete?: (...args: any[]) => void;
  onClick?: (tag: string) => void;
};
