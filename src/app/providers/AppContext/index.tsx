import { useAppContext } from 'app/context/useAppContext.ts';
import { AppContext } from 'app/context';
import type { ReactNode } from 'react';

export const Context = ({ children }: { children: ReactNode }) => {
  const context = useAppContext();
  return <AppContext value={context}>{children}</AppContext>;
};
