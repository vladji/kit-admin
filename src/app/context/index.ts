import { Locales } from 'app/locales/types.ts';
import { createContext } from 'react';
import { getDefaultLocale } from 'app/locales/utils.ts';

export interface AppContextProps {
  locale: Locales;
  setLocale: (locale: Locales) => void;
  message: string;
  setMessage: (message: string) => void;
}

const defaultLocale = getDefaultLocale();

export const AppContext = createContext<AppContextProps>({
  locale: defaultLocale,
  setLocale: () => {},
  message: '',
  setMessage: () => {},
});
