import * as Styled from './Alert.styles';
import { AlertProps } from './Alert.types';

export const Alert = ({ children, className, ...props }: AlertProps) => {
  return (
    <Styled.Wrapper className={className} {...props}>
      <Styled.Icon />
      {children}
    </Styled.Wrapper>
  );
};
