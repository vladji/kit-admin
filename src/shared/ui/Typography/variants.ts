import { cva } from 'class-variance-authority';

export const textVariants = cva('', {
  variants: {
    type: {
      default: '',
      h1: 'font-h1',
      h2: 'font-h2',
      title: 'font-title',
      caption: 'font-caption',
    },
    variant: {
      default: '',
      bold: 'font-bold',
      center: 'text-center',
    },
    color: {
      default: '',
      brand: 'text-brand',
    },
    leading: {
      default: 'leading-5',
      caption: 'leading-4',
      leadingL: 'leading-6',
    },
  },
  defaultVariants: {
    variant: 'default',
    type: 'default',
    color: 'default',
    leading: 'default',
  },
});
