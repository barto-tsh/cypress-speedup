import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import loginBg from 'assets/images/loginBg.jpg';
import { AppRoute } from 'routing/AppRoute.enum';
import { useAuth } from 'hooks/useAuth/useAuth';
import { AppMessages } from 'i18n/messages';
import { AuthLayout } from 'ui/authLayout/AuthLayout';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Loader } from 'app/home/Home.styles';
import { LoginArguments } from 'api/actions/auth/authActions.types';
import { ButtonColor } from 'ui/button/Button.types';

import * as Styled from './Login.styles';

export const Login = () => {
  const { formatMessage } = useLocale();
  const { loginQuery } = useAuth();
  const { isLoading } = loginQuery;
  const [errorMessageId, setErrorMessageId] = useState<string | number | undefined>(undefined);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginArguments>();

  const login = (data: LoginArguments) =>
    loginQuery.mutateAsync(data, {
      onSuccess: () => {
        toast.success(
          formatMessage({
            id: AppMessages['login.success'],
          }),
        );
      },
      onError: (error) => {
        switch (error.response?.status) {
          case 400:
            setErrorMessageId(AppMessages['login.error.400']);
            return;
          default:
            setErrorMessageId(AppMessages['error.fallback']);
            return;
        }
      },
    });

  const onSubmit = handleSubmit((data) => {
    setErrorMessageId(undefined);
    login(data);
  });

  return (
    <AuthLayout backgroundImage={loginBg}>
      <Styled.Heading>
        {formatMessage({
          id: AppMessages['login.heading'],
        })}
      </Styled.Heading>
      {errorMessageId && (
        <Styled.Alert data-testid="login-alert">
          <p>
            {formatMessage(
              {
                id: errorMessageId,
              },
              {
                link: (str) => <Link to={AppRoute.register}>{str}</Link>,
                br: () => <br></br>,
              },
            )}
          </p>
        </Styled.Alert>
      )}
      <form onSubmit={onSubmit} data-testid="login-form">
        <Styled.Input
          id="login-username"
          type="text"
          label={formatMessage({
            id: AppMessages['auth.username'],
          })}
          placeholder={formatMessage({
            id: AppMessages['auth.usernamePlaceholder'],
          })}
          disabled={isLoading}
          error={errors.username?.message}
          {...register('username', {
            required: formatMessage({
              id: AppMessages['error.fieldRequired'],
            }),
          })}
        />
        <Styled.Input
          id="login-password"
          type="password"
          label={formatMessage({
            id: AppMessages['auth.password'],
          })}
          placeholder={formatMessage({
            id: AppMessages['auth.passwordPlaceholder'],
          })}
          disabled={isLoading}
          error={errors.password?.message}
          {...register('password', {
            required: formatMessage({
              id: AppMessages['error.fieldRequired'],
            }),
          })}
        />
        <Styled.SubmitRow>
          <Styled.Button disabled={isLoading} color={ButtonColor.blue} data-testid="form-submit">
            {formatMessage({
              id: AppMessages['login.submitLabel'],
            })}
          </Styled.Button>
          {isLoading && <Loader />}
        </Styled.SubmitRow>
      </form>
      <Styled.LinkWrapper>
        <Link to={AppRoute.register} data-testid="registration-link">
          {formatMessage({
            id: AppMessages['login.authLink'],
          })}
        </Link>
      </Styled.LinkWrapper>
    </AuthLayout>
  );
};
