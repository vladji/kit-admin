import type { ComponentPropsWithoutRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cn } from 'shared/styles/utils.ts';
import type { TextTag } from 'shared/ui/Typography/types.ts';
import { textVariants } from 'shared/ui/Typography/variants.ts';

type Props<T extends TextTag> = {
  as?: T;
  ellipsis?: boolean;
} & ComponentPropsWithoutRef<T> &
  VariantProps<typeof textVariants>;

export const Text = <T extends TextTag = 'span'>({
  as,
  ellipsis = false,
  children,
  className,
  type,
  variant,
  color,
  leading,
  ...props
}: Props<T>) => {
  const Tag = as || 'span';
  return (
    <Tag
      {...props}
      className={cn(
        textVariants({ type, variant, color, leading }),
        className,
        ellipsis && 'overflow-hidden text-ellipsis whitespace-nowrap'
      )}
    >
      {children}
    </Tag>
  );
};
