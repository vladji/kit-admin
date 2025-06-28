import type { ReactNode } from 'react';
import { Typography } from '../Typography';

export const HeaderTemplate = ({ children }: { children: ReactNode }) => (
  <header className="block-shadow screen-padding flex items-center justify-between gap-8">
    <Typography as="h1" type="title">
      KIT admin
    </Typography>
    <div className="flex items-center gap-2">{children}</div>
  </header>
);
