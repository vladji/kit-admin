import { cva } from 'class-variance-authority';

export const mainButtonVariants = cva(
  'h-12 px-6 inline-flex items-center justify-center whitespace-nowrap rounded-md font-bold leading-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 disabled:text-text-muted',
  {
    variants: {
      variant: {
        default:
          'bg-brand text-white shadow hover:bg-brand/90 disabled:bg-disabled',
        outline: 'border-[1.5px] border-border-color text-base-gray',
      },
      size: {
        default: '',
        fullWidth: 'w-full',
        compact: 'h-9 font-semibold text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
