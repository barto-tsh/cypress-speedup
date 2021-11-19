import * as Styled from './Card.styles';
import { CardProps } from './Card.types';

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <Styled.Card className={className} {...props}>
      {children}
    </Styled.Card>
  );
};
