import { up } from 'styled-breakpoints';
import styled from 'styled-components';

export const Page = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 8px 0 40px;
  max-width: 1256px;

  ${up('md')} {
    padding: 87px 16px 75px;
  }
`;
