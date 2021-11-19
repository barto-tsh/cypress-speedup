import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import { ReactComponent as LogoBase } from 'assets/svg/logo.svg';

import { AuthLayoutProps } from './AuthLayout.types';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  padding: 0 16px;
  max-width: 708px;

  ${up('md')} {
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0 32px;
    margin-bottom: 48px;
  }

  ${up('lg')} {
    padding: 0 80px;
  }

  ${up('xl')} {
    padding: 0 104px;
  }
`;

export const Logo = styled(LogoBase)`
  width: 83px;
  height: 19px;
  position: absolute;
  margin: 0 auto;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);

  ${up('md')} {
    top: 30px;
    left: 0;
    transform: none;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 115px;

  ${up('md')} {
    padding-top: 238px;
    max-width: 392px;
  }
`;

export const Right = styled.div<Pick<AuthLayoutProps, 'backgroundImage'>>`
  display: none;
  flex: 2;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;

  ${up('md')} {
    display: flex;
  }

  ${up('xl')} {
    flex: 1;
  }
`;
