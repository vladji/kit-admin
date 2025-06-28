import {
  type ComponentProps,
  type FC,
  type ReactElement,
  type ReactNode,
  type SVGProps,
} from 'react';
import { cn } from 'shared/styles/utils.ts';

type Props = ComponentProps<'button'> & {
  children?: ReactElement;
  Icon?: (props: SVGProps<SVGSVGElement>) => ReactNode;
};

export const GhostButton: FC<Props> = ({ children, Icon, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'flex-center cursor-pointer gap-2 px-2 py-1',
        props.className
      )}
    >
      {!!Icon && <Icon />}
      {!!children && <span>{children}</span>}
    </button>
  );
};
