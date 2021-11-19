import * as Styled from './Heading.styles';
import { HeadingProps } from './Heading.types';

export const Heading = ({ children, as = 'h1', className }: HeadingProps) => {
  return (
    <Styled.Heading as={as} className={className}>
      {children}
    </Styled.Heading>
  );
};
