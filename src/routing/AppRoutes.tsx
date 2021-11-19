import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from 'app/home/Home';
import { Login } from 'app/login/Login';
import { Logout } from 'app/logout/Logout';
import { Register } from 'app/register/Register';

import { AppRoute } from './AppRoute.enum';
import { AuthorizedRoute } from './AuthorizedRoute';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact component={Home} />
      <AuthorizedRoute path={AppRoute.login} exact component={Login} redirectIfAuthorized />
      <AuthorizedRoute path={AppRoute.register} exact component={Register} redirectIfAuthorized />
      <AuthorizedRoute path={AppRoute.logout} exact component={Logout} />
      <Redirect to={AppRoute.home} />
    </Switch>
  );
};
