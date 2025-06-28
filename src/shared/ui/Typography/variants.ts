import { cva } from 'class-variance-authority';

export const textVariants = cva('', {
  variants: {
    type: {
      default: '',
      h1: 'font-h1',
      h2: 'font-h2',
      title: 'font-title',
      caption: 'font-caption',
      label: 'font-label',
    },
    variant: {
      default: '',
      bold: 'font-bold',
      semibold: 'font-semibold',
      center: 'text-center',
    },
    color: {
      default: '',
      brand: 'text-brand',
      muted: 'text-text-muted',
      alert: 'text-alert',
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
