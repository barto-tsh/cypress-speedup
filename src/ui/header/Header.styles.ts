import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { Link } from 'react-router-dom';

import { Button as ButtonBase } from 'ui/button/Button';
import { Avatar as AvatarBase } from 'ui/avatar/Avatar';
import { ReactComponent as IconUserBase } from 'assets/svg/user.svg';
import { ReactComponent as IconLogoutBase } from 'assets/svg/logout.svg';

export const Header = styled.header(
  ({ theme }) => css`
    height: 51px;
    background-color: ${theme.color.white};
    box-shadow: ${theme.shadow.sm};
    z-index: 10;

    ${up('md')} {
      height: 80px;
      box-shadow: ${theme.shadow.lg};
    }
  `,
);

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1256px;
  padding: 0 16px;
  display: flex;
  align-items: center;

  ${up('md')} {
    justify-content: space-between;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  a {
    display: flex;
  }
`;

export const LogoWrapper = styled.div`
  order: 2;
  margin-left: 16px;

  ${up('md')} {
    margin-left: 0;
    order: initial;
  }
`;

const iconStyles = css`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.color.tuna};
  display: inline-block;

  ${up('md')} {
    display: none;
  }
`;

export const IconUser = styled(IconUserBase)`
  ${iconStyles}
`;

export const IconLogout = styled(IconLogoutBase)`
  ${iconStyles}
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  width: auto;
  order: 3;
  margin-left: auto;
  display: flex;
  cursor: pointer;

  & > svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.color.tuna};
  }

  ${up('md')} {
    display: none;
    margin-left: 0;
  }
`;

export const Button = styled(ButtonBase)`
  width: auto;
  display: none;

  ${up('md')} {
    display: flex;
  }
`;

export const AuthLink = styled(Link)`
  :nth-of-type(2) {
    display: none;

    ${up('md')} {
      display: flex;
    }
  }
`;

export const Avatar = styled(AvatarBase)`
  display: none;

  ${up('md')} {
    display: inline-flex;
  }
`;
