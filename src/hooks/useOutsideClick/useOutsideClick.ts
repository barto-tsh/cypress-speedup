import { RefObject, useEffect } from 'react';

import { AnyEvent } from './useOutsideClick.types';

const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void,
  disabled?: boolean,
) => {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      if (disabled || !el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [ref, handler, disabled]);
};

export { useOutsideClick };
