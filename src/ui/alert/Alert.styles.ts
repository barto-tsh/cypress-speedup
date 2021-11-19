import styled from 'styled-components';
import hexRgb from 'hex-rgb';

import { ReactComponent as IconWarning } from 'assets/svg/warning.svg';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px 16px 16px 72px;
  background-color: ${({ theme }) => hexRgb(theme.color.red, { alpha: 0.06, format: 'css' })};
`;

export const Icon = styled(IconWarning)`
  position: absolute;
  top: 50%;
  left: 24px;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.color.red};
  transform: translateY(-50%);
`;
