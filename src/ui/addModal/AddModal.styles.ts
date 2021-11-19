import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

import { Heading as HeadingBase } from 'ui/heading/Heading';
import { Input as InputBase } from 'ui/input/Input';
import { Button as ButtonBase } from 'ui/button/Button';
import { PillButton as PillButtonBase } from 'ui/pillButton/PillButton';
import { Textarea as TextareaBase } from 'ui/textarea/Textarea';
import { ReactComponent as LoaderBase } from 'assets/svg/spinner.svg';
import { Alert as AlertBase } from 'ui/alert/Alert';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 30;
  overflow: scroll;

  ${up('md')} {
    background-color: rgba(45, 45, 50, 0.9);
  }
`;

export const Wrapper = styled.div(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 24px 16px;
    background-color: ${theme.color.white};
    color: ${theme.color.tuna};
    overflow: auto;

    ${up('md')} {
      width: auto;
      height: auto;
      max-width: 600px;
      border-radius: 16px;
      padding: 48px 104px;
    }
  `,
);

export const Heading = styled(HeadingBase)(
  ({ theme }) => css`
    margin-bottom: 24px;

    ${up('md')} {
      margin-bottom: 40px;
      font-size: ${theme.font.size['3xl']};
      line-height: ${theme.lineHeight['2xl']};
    }
  `,
);

export const Input = styled(InputBase)`
  margin-bottom: 24px;
  ${up('md')} {
    margin-bottom: 32px;
  }
`;

export const Textarea = styled(TextareaBase)`
  margin-bottom: 24px;
  ${up('md')} {
    margin-bottom: 32px;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  ${up('md')} {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${up('md')} {
    flex-direction: row;
  }
`;

export const PillButton = styled(PillButtonBase)`
  align-self: flex-start;
  margin-bottom: 24px;
  ${up('md')} {
    display: none;
  }
`;

export const Button = styled(ButtonBase)`
  margin-bottom: 16px;
  ${up('md')} {
    margin-bottom: 0;
    margin-right: 8px;
  }
`;

export const Loader = styled(LoaderBase)`
  margin: 0;
`;

export const Alert = styled(AlertBase)`
  margin-top: 24px;
`;
