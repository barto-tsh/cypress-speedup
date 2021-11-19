import { Header } from 'ui/header/Header';

import { LayoutProps } from './Layout.types';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
