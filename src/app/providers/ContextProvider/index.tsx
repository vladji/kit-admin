import type { ReactNode } from 'react';
import { AppContext } from 'app/context';
import { useAppContext } from 'app/context/useAppContext.ts';

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const context = useAppContext();
  return <AppContext value={context}>{children}</AppContext>;
};
