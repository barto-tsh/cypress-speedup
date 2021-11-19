import styled from 'styled-components';

import { Input, Count as CountBase } from 'ui/input/Input.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Textarea = styled(Input)`
  height: 300px;
  font-family: 'Inter';
  height: 72px;
  resize: none;
`;

export const Count = styled(CountBase)`
  top: 0;
`;
