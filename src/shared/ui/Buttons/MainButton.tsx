import type { ComponentProps, FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { mainButtonVariants } from 'shared/ui/Buttons/variants.ts';
import { cn } from 'shared/styles/utils.ts';

export type MainButtonProps = ComponentProps<'button'> &
  VariantProps<typeof mainButtonVariants>;

export const MainButton: FC<MainButtonProps> = ({
  variant,
  size,
  className,
  ...props
}) => {
  const classes = cn(mainButtonVariants({ variant, size }), className);

  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  );
};
