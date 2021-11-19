import { AxiosError } from 'axios';
import { UseMutationResult } from 'react-query';

import { LoginArguments, LoginResponse, LogoutResponse, RegisterArguments } from 'api/actions/auth/authActions.types';
import { User } from 'api/types/User.types';

export type AuthContextValueType = {
  isAuthorized: boolean;
  loginQuery: UseMutationResult<LoginResponse, AxiosError, LoginArguments, unknown>;
  registerQuery: UseMutationResult<LoginResponse, AxiosError, RegisterArguments, unknown>;
  logoutQuery: UseMutationResult<LogoutResponse, AxiosError, unknown, unknown>;
  user: User | null;
};
