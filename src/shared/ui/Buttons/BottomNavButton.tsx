import type { FC, ReactElement } from 'react';
import { Link } from '@tanstack/react-router';
import type { LucideIconFC } from 'shared/types/icon.ts';
import { Typography } from 'shared/ui/Typography';

export interface BottomNavButtonProps {
  link: string;
  Icon: LucideIconFC;
  text: ReactElement;
}

export const BottomNavButton: FC<BottomNavButtonProps> = ({
  link,
  Icon,
  text,
}) => {
  return (
    <Link
      className="flex-col-gap-1 [&.active]:text-brand [&.active]:bg-brand-light/20 items-center rounded-sm px-2 py-1"
      to={link}
    >
      <Icon size={21} />
      <Typography type="label" className="text-inherit">
        {text}
      </Typography>
    </Link>
  );
};
