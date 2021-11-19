import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth/useAuth';

import { AppRoute } from './AppRoute.enum';
import { AuthorizedRouteProps } from './AuthorizedRoute.types';

export const AuthorizedRoute = ({ redirectIfAuthorized = false, ...props }: AuthorizedRouteProps) => {
  const { isAuthorized } = useAuth();

  if ((isAuthorized && !redirectIfAuthorized) || (!isAuthorized && redirectIfAuthorized)) {
    return <Route {...props} />;
  }

  if (isAuthorized && redirectIfAuthorized) {
    return <Redirect to={AppRoute.home} />;
  }

  return <Redirect to={AppRoute.login} />;
};
