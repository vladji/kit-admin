import type { ComponentProps, FC } from 'react';
import { Link } from '@tanstack/react-router';
import type { VariantProps } from 'class-variance-authority';
import { cn } from 'shared/styles/utils.ts';
import { mainButtonVariants } from 'shared/ui/Buttons/variants.ts';

export type ButtonProps = ComponentProps<'button'> &
  ComponentProps<typeof Link> & {
    link?: string;
  };

export type MainButtonProps = ButtonProps &
  VariantProps<typeof mainButtonVariants> & {
    link?: string;
  };

export const MainButton: FC<MainButtonProps> = ({
  variant,
  size,
  className,
  link,
  ...props
}) => {
  const classes = cn(mainButtonVariants({ variant, size }), className);

  if (link || props.to) {
    return (
      <Link
        {...(props as ComponentProps<typeof Link>)}
        to={link}
        className={classes}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  );
};
