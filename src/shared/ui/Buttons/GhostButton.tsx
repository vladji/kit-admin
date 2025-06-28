import {
  type ComponentProps,
  type FC,
  type ReactNode,
  type SVGProps,
} from 'react';
import { Link } from '@tanstack/react-router';
import { cn } from 'shared/styles/utils.ts';

type Props = {
  Icon?: (props: SVGProps<SVGSVGElement>) => ReactNode;
  children?: ReactNode;
  className?: string;
  link?: string;
} & ComponentProps<'button'> &
  ComponentProps<typeof Link>;

export const GhostButton: FC<Props> = ({ children, Icon, link, ...props }) => {
  const content = (
    <>
      {!!Icon && <Icon />}
      {!!children && <span>{children}</span>}
    </>
  );

  const className = cn(
    'flex-gap-2 items-center cursor-pointer px-2 py-1 hover:bg-disabled/50 transition-colors rounded-sm',
    props.className
  );

  if (link || props.to) {
    return (
      <Link
        {...(props as ComponentProps<typeof Link>)}
        to={link}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return (
    <button {...(props as ComponentProps<'button'>)} className={className}>
      {content}
    </button>
  );
};
