import * as Styled from './NoEntries.styles';
import { NoEntriesProps } from './NoEntries.types';

export const NoEntries = ({ label }: NoEntriesProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Icon />
      <Styled.Heading>{label}</Styled.Heading>
    </Styled.Wrapper>
  );
};
