import { ButtonProps } from './Button.types';
import * as Styled from './Button.styles';

export const Button = ({ children, withIcon, ...props }: ButtonProps) => {
  return (
    <Styled.Button withIcon={withIcon} {...props}>
      {withIcon && <Styled.Icon />}
      <span>{children}</span>
    </Styled.Button>
  );
};
