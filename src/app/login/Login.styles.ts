import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

import { Heading as HeadingBase } from 'ui/heading/Heading';
import { Input as InputBase } from 'ui/input/Input';
import { Button as ButtonBase } from 'ui/button/Button';
import { Alert as AlertBase } from 'ui/alert/Alert';

export const Heading = styled(HeadingBase)`
  margin-bottom: 24px;
  text-align: center;

  ${up('md')} {
    margin-bottom: 40px;
    text-align: left;
  }
`;

export const Input = styled(InputBase)`
  margin-bottom: 32px;

  :last-of-type {
    margin-bottom: 40px;
  }
`;

export const SubmitRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${up('md')} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Button = styled(ButtonBase)`
  width: 100%;
  padding: 8px 41px;

  ${up('md')} {
    width: auto;
  }
`;

export const Alert = styled(AlertBase)(
  ({ theme }) => css`
    margin-bottom: 24px;
    p {
      font-size: ${theme.font.size.sm};
      line-height: ${theme.lineHeight.base};
    }
  `,
);

export const LinkWrapper = styled.div(
  ({ theme }) => css`
    text-align: center;
    margin-top: 24px;

    a {
      color: ${theme.color.darkGrey};
      font-size: ${theme.font.size.sm};
      line-height: ${theme.lineHeight.base};
      font-weight: ${theme.font.weight.medium};
      text-decoration: underline;
    }

    ${up('md')} {
      margin-top: 63px;
      text-align: left;
    }
  `,
);
