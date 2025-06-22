import { LocalStorageKeys } from 'app/storage/types.ts';
import { Locales } from 'app/locales/types.ts';
import { DEFAULT_LOCALE } from 'app/config/constants.ts';

export const getDefaultLocale = () => {
  return (
    (localStorage.getItem(LocalStorageKeys.Locale) as Locales) || DEFAULT_LOCALE
  );
};
