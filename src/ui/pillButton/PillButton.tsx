import { PillButtonProps } from './PillButton.types';
import * as Styled from './PillButton.styles';

export const PillButton = ({ label, ...props }: PillButtonProps) => {
  return (
    <Styled.Button {...props}>
      <Styled.Icon />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Button>
  );
};
