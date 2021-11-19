import { useQueryClient } from 'react-query';

import { useQuery } from 'hooks/useQuery/useQuery';
import { useMutation } from 'hooks/useMutation/useMutation';
import { AuthContext } from '../authContext/AuthContext';
import { authStorage } from '../authStorage/AuthStorage';
import { getCurrentUserAction, loginAction, registerAction, logoutAction } from 'api/actions/auth/authActions';
import { LoginResponse, LoginArguments, RegisterArguments, LogoutResponse } from 'api/actions/auth/authActions.types';
import { User } from 'api/types/User.types';

import { AuthContextControllerProps } from './AuthContextController.types';

const clearAuth = () => {
  authStorage.accessToken = null;
  authStorage.user = null;
};

export const AuthContextController = ({ children }: AuthContextControllerProps) => {
  const queryClient = useQueryClient();

  const loginQuery = useMutation<LoginResponse, LoginArguments>(loginAction('login-mutation'), {
    onSuccess: ({ key }) => {
      queryClient.invalidateQueries();
      authStorage.accessToken = key;
    },
  });

  const registerQuery = useMutation<LoginResponse, RegisterArguments>(registerAction('register-mutation'), {
    onSuccess: ({ key }) => {
      queryClient.invalidateQueries();
      authStorage.accessToken = key;
    },
  });

  const logoutQuery = useMutation<LogoutResponse, unknown>(logoutAction('logout-mutation'), {
    onSuccess: () => {
      clearAuth();
      queryClient.removeQueries('current-user');
      queryClient.cancelQueries();
      queryClient.invalidateQueries();
    },
  });

  useQuery<User>(getCurrentUserAction('current-user'), {
    enabled: !!authStorage.accessToken,
    onSuccess: (data) => {
      authStorage.user = data;
    },
    onError: clearAuth,
  });

  const user = authStorage.user;
  const isAuthorized = !!authStorage.accessToken && !!user;

  return (
    <AuthContext.Provider value={{ isAuthorized, loginQuery, registerQuery, logoutQuery, user }}>
      {children}
    </AuthContext.Provider>
  );
};
