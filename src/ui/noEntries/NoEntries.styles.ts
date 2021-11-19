import styled, { css } from 'styled-components';

import { Heading as HeadingBase } from 'ui/heading/Heading';
import { ReactComponent as IconWarning } from 'assets/svg/warning.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 24px 0;
`;

export const Heading = styled(HeadingBase)(
  ({ theme }) => css`
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.regular};
  `,
);

export const Icon = styled(IconWarning)`
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.color.darkGrey};
`;
