import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { ReactComponent as IconSearch } from 'assets/svg/search.svg';
import { useAuth } from 'hooks/useAuth/useAuth';
import { AppRoute } from 'routing/AppRoute.enum';
import { ButtonColor } from 'ui/button/Button.types';

import * as Styled from './Header.styles';
import { SearchForm } from './searchForm/SearchForm';

export const Header = () => {
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const { user, logoutQuery } = useAuth();

  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Styled.LogoWrapper>
          <Link to={AppRoute.home} data-testid="logo">
            <Logo />
          </Link>
        </Styled.LogoWrapper>
        <SearchForm isVisible={isSearchBoxVisible} onClose={() => setIsSearchBoxVisible(false)} />
        {user ? (
          <div>
            <Styled.Avatar size={40} user={user} />
            <Link to={logoutQuery.isLoading ? '' : AppRoute.logout} data-testid="logout-link">
              <Styled.IconLogout />
              <Styled.Button disabled={logoutQuery.isLoading} color={ButtonColor.red}>
                Logout
              </Styled.Button>
            </Link>
          </div>
        ) : (
          <div>
            <Styled.AuthLink to={AppRoute.login} data-testid="login-link">
              <Styled.IconUser />
              <Styled.Button color={ButtonColor.transparent}>Login</Styled.Button>
            </Styled.AuthLink>
            <Styled.AuthLink to={AppRoute.register} data-testid="register-link">
              <Styled.Button color={ButtonColor.blue}>Register</Styled.Button>
            </Styled.AuthLink>
          </div>
        )}
        <Styled.SearchButton onClick={() => setIsSearchBoxVisible(true)}>
          <IconSearch />
        </Styled.SearchButton>
      </Styled.Wrapper>
    </Styled.Header>
  );
};
