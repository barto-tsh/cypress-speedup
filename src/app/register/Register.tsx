import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import registerBg from 'assets/images/registerBg.jpg';
import { AppRoute } from 'routing/AppRoute.enum';
import { useAuth } from 'hooks/useAuth/useAuth';
import { AppMessages } from 'i18n/messages';
import { AuthLayout } from 'ui/authLayout/AuthLayout';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Loader } from 'app/home/Home.styles';
import { RegisterArguments } from 'api/actions/auth/authActions.types';
import { ButtonColor } from 'ui/button/Button.types';

import * as Styled from './Register.styles';

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

export const Register = () => {
  const { formatMessage } = useLocale();
  const { registerQuery } = useAuth();
  const { isLoading } = registerQuery;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<RegisterArguments>({ mode: 'onBlur' });

  const registerAccount = (data: RegisterArguments) =>
    registerQuery.mutateAsync(
      { ...data, email: data.email || undefined },
      {
        onSuccess: () => {
          toast.success(
            formatMessage({
              id: AppMessages['register.success'],
            }),
          );
        },
        onError: ({ response }) => {
          if (response?.data) {
            const fields = Object.entries(response?.data) as [keyof RegisterArguments, string][];
            fields.map(([key, value]) => setError(key, { message: value }));
          } else {
            toast.error(
              formatMessage({
                id: AppMessages['error.fallback'],
              }),
            );
          }
        },
      },
    );

  const onSubmit = handleSubmit((data) => {
    registerAccount(data);
  });

  return (
    <AuthLayout backgroundImage={registerBg}>
      <Styled.Heading>
        {formatMessage({
          id: AppMessages['register.heading'],
        })}
      </Styled.Heading>
      <form onSubmit={onSubmit}>
        <Styled.Input
          id="register-username"
          type="text"
          label={formatMessage({
            id: AppMessages['auth.username'],
          })}
          placeholder={formatMessage({
            id: AppMessages['auth.usernamePlaceholder'],
          })}
          disabled={isLoading}
          error={errors.username?.message}
          maxLength={150}
          {...register('username', {
            minLength: {
              value: 5,
              message: formatMessage({
                id: AppMessages['error.usernameTooShort'],
              }),
            },
            maxLength: {
              value: 150,
              message: formatMessage({
                id: AppMessages['error.usernameTooLong'],
              }),
            },
            required: formatMessage({
              id: AppMessages['error.fieldRequired'],
            }),
          })}
        />
        <Styled.Input
          id="register-password"
          type="password"
          label={formatMessage({
            id: AppMessages['auth.password'],
          })}
          placeholder={formatMessage({
            id: AppMessages['auth.passwordPlaceholder'],
          })}
          disabled={isLoading}
          error={errors.password1?.message}
          {...register('password1', {
            required: formatMessage({
              id: AppMessages['error.fieldRequired'],
            }),
            minLength: {
              value: 8,
              message: formatMessage({
                id: AppMessages['error.passwordTooShort'],
              }),
            },
          })}
        />
        <Styled.Input
          id="register-password-confirmation"
          type="password"
          label={formatMessage({
            id: AppMessages['auth.passwordConfirmation'],
          })}
          placeholder={formatMessage({
            id: AppMessages['auth.passwordConfirmationPlaceholder'],
          })}
          disabled={isLoading}
          error={errors.password2?.message}
          {...register('password2', {
            validate: (value) =>
              value === watch('password1') ||
              formatMessage({
                id: AppMessages['error.passwordsDontMatch'],
              }),
            required: formatMessage({
              id: AppMessages['error.fieldRequired'],
            }),
          })}
        />
        <Styled.Input
          id="register-email"
          type="text"
          label={formatMessage({
            id: AppMessages['auth.email'],
          })}
          placeholder={formatMessage({
            id: AppMessages['auth.emailPlaceholder'],
          })}
          disabled={isLoading}
          error={errors.email?.message}
          {...register('email', {
            pattern: {
              value: emailRegex,
              message: formatMessage({
                id: AppMessages['error.incorrectEmail'],
              }),
            },
          })}
        />
        <Styled.SubmitRow>
          <Styled.Button disabled={isLoading} color={ButtonColor.blue} data-testid="form-submit">
            {formatMessage({
              id: AppMessages['register.submitLabel'],
            })}
          </Styled.Button>
          {isLoading && <Loader />}
        </Styled.SubmitRow>
      </form>
      <Styled.LinkWrapper>
        <Link to={AppRoute.login} data-testid="login-link">
          {formatMessage({
            id: AppMessages['register.authLink'],
          })}
        </Link>
      </Styled.LinkWrapper>
    </AuthLayout>
  );
};
