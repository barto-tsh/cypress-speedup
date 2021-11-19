import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ThemeProvider } from 'styled-components';

import { theme } from 'ui/theme/theme';
import { QueryClientProvider } from 'providers/queryClientProvider/QueryClientProvider';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { ClientContextController } from 'context/client/clientContextController/ClientContextController';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <LocaleContextController>
    <ClientContextController>
      <QueryClientProvider>
        <AuthContextController>
          <Router>
            <QueryParamProvider ReactRouterRoute={Route}>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </QueryParamProvider>
          </Router>
        </AuthContextController>
      </QueryClientProvider>
    </ClientContextController>
  </LocaleContextController>
);
