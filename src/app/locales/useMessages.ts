import { useEffect, useState } from 'react';
import type { Locales } from 'app/locales/types.ts';
import type { MessageFormatElement } from 'react-intl';
import RuMessages from './compiled/ru.json';

const getMessages = async (locale: Locales) => {
  if (locale === 'ru') {
    return RuMessages;
  } else {
    return await import('./compiled/en.json');
  }
};

type MessagesType =
  | Record<string, string>
  | Record<string, MessageFormatElement[]>;

type UseMessages = (locale: Locales) => {
  messages?: MessagesType;
};

export const useMessages: UseMessages = (locale) => {
  const [messages, setMessages] = useState<MessagesType>(RuMessages);

  useEffect(() => {
    (async () => {
      const messages = await getMessages(locale);
      setMessages(messages);
    })();
  }, [locale]);

  return {
    messages,
  };
};
