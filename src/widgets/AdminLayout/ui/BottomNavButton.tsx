import type { FC, ReactElement } from 'react';
import { Link } from '@tanstack/react-router';
import type { LucideIconFC } from 'shared/types/icon.ts';
import { Typography } from 'shared/ui/Typography';

interface Props {
  link: string;
  text: ReactElement;
  Icon: LucideIconFC;
}

export const BottomNavButton: FC<Props> = ({ link, Icon, text }) => {
  return (
    <Link className="flex-col-gap-1 items-center" to={link}>
      <Icon />
      <Typography type="label">{text}</Typography>
    </Link>
  );
};
