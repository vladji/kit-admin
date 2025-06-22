import type { AppContextProps } from 'app/context/index.ts';
import { useState } from 'react';
import type { Locales } from 'app/locales/types.ts';
import { getDefaultLocale } from 'app/locales/utils.ts';
import { LocalStorageKeys } from 'app/storage/types.ts';

type UseAppContext = () => AppContextProps;

export const useAppContext: UseAppContext = () => {
  const defaultLocale = getDefaultLocale();
  const [locale, setLocale] = useState<Locales>(defaultLocale);
  const [errorMessage, setErrorMessage] = useState<string>('');

  return {
    locale,
    setLocale: (locale: Locales) => {
      setLocale(locale);
      localStorage.setItem(LocalStorageKeys.Locale, locale);
    },
    message: errorMessage,
    setMessage: (message) => setErrorMessage(message),
  };
};
