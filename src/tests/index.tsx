// see https://testing-library.com/docs/react-testing-library/setup#custom-render
import React, { ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Queries } from '@testing-library/dom';

import { AppProviders } from 'providers/AppProviders';

// @TODO: https://bitbucket.org/thesoftwarehouse/react-starter-boilerplate/pull-requests/5/rss-9-add-login-page/diff#comment-132626297
const Wrapper = ({ children }: { children?: ReactNode }) => {
  return <AppProviders>{children}</AppProviders>;
};

function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult;
function customRender<Q extends Queries>(ui: React.ReactElement, options: RenderOptions<Q>): RenderResult<Q>;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options?: RenderOptions<Q> | Omit<RenderOptions, 'queries'>,
): RenderResult<Q> | RenderResult {
  return render<Q>(ui, { wrapper: options?.wrapper ?? Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
