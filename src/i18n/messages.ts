import { AppLocale } from '../context/locale/AppLocale.enum';

import enMessages from './data/en.json';

type KeyAsValue<T> = { [P in keyof T]: P };

const keysToValues = <T extends Record<string, string | unknown>>(source: T): KeyAsValue<typeof source> => {
  return (Object.keys(source) as Array<keyof T>).reduce((accumulated, current) => {
    accumulated[current] = current;
    return accumulated;
  }, {} as KeyAsValue<typeof source>);
};

export const AppMessages = {
  ...keysToValues(enMessages),
};

export const translations: Record<AppLocale, Record<keyof typeof AppMessages, string>> = {
  [AppLocale.en]: enMessages,
};
