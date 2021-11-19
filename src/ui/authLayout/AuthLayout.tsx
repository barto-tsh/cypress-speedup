import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import * as Styled from './AuthLayout.styles';
import { AuthLayoutProps } from './AuthLayout.types';

export const AuthLayout = ({ backgroundImage, children }: AuthLayoutProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Left>
        <Styled.ContentWrapper>
          <Link to={AppRoute.home} data-testid="logo-link">
            <Styled.Logo />
          </Link>
          {children}
        </Styled.ContentWrapper>
      </Styled.Left>
      <Styled.Right backgroundImage={backgroundImage}></Styled.Right>
    </Styled.Wrapper>
  );
};
