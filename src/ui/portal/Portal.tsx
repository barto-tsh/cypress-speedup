import { createPortal } from 'react-dom';

import { PortalProps } from './Portal.types';

export const Portal = ({ children }: PortalProps) => {
  return createPortal(children, document.getElementById('portal-root') as HTMLDivElement);
};
