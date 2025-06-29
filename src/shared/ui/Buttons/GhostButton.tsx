import { type ComponentProps, type FC, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { cn } from 'shared/styles/utils.ts';
import type { LucideIconFC } from 'shared/types/icon.ts';

type Props = {
  Icon?: LucideIconFC;
  iconSize?: number;
  iconColor?: string;
  children?: ReactNode;
  className?: string;
  link?: string;
} & ComponentProps<'button'> &
  ComponentProps<typeof Link>;

export const GhostButton: FC<Props> = ({
  children,
  Icon,
  iconSize = 18,
  iconColor = '--color-base-gray',
  link,
  ...props
}) => {
  const className = cn(
    'flex-gap-2 items-center cursor-pointer px-2 py-1 hover:bg-disabled/50 transition-colors rounded-sm',
    props.className
  );

  if (link || props.to) {
    return (
      <Link
        {...(props as ComponentProps<typeof Link>)}
        to={link}
        className={cn(
          className,
          '[&.active]:text-brand [&.active]:bg-brand-light/10'
        )}
      >
        {!!Icon && <Icon className="text-inherit" size={iconSize} />}
        {!!children && <span>{children}</span>}
      </Link>
    );
  }

  return (
    <button {...(props as ComponentProps<'button'>)} className={className}>
      {!!Icon && <Icon size={iconSize} color={`var(${iconColor})`} />}
      {!!children && <span>{children}</span>}
    </button>
  );
};
