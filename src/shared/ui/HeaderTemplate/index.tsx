import type { FC, ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { Typography } from '../Typography';

export interface HeaderTemplateProps {
  children: ReactNode;
  logoLink: string;
  logoText?: string;
  logoEmoji?: string;
}

export const HeaderTemplate: FC<HeaderTemplateProps> = ({
  children,
  logoLink,
  logoText = '',
  logoEmoji,
}) => (
  <header className="block-shadow screen-padding sticky top-0 flex items-center justify-between gap-8">
    <Link className="flex items-center gap-3 text-black" to={logoLink}>
      <Typography as="h1" type="title">
        KIT {logoText}
      </Typography>
      {!!logoEmoji && <Typography type="h2">{logoEmoji}</Typography>}
    </Link>
    {children}
  </header>
);
