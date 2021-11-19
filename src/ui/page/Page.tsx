import { PageProps } from './Page.types';
import * as Styled from './Page.styles';

export const Page = ({ children }: PageProps) => {
  return <Styled.Page>{children}</Styled.Page>;
};
