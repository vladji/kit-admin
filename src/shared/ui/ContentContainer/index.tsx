import type { ReactNode } from 'react';

export const ContentContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex-1 px-4 pb-4 lg:overflow-auto">{children}</div>
);
