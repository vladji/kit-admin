import type { ComponentProps, FC, ReactElement } from 'react';
import { cn } from '../../styles/utils.ts';
import { Typography } from '../Typography';

interface Props extends ComponentProps<'input'> {
  label: ReactElement | string;
  errorMessage?: string;
}

export const Input: FC<Props> = ({
  label,
  errorMessage,
  defaultValue,
  type = 'text',
  disabled,
  ...props
}) => {
  return (
    <div className="flex-col-gap-2 flex-1">
      <div
        className={cn(
          'flex h-12 flex-col rounded-lg border px-4 py-1',
          errorMessage ? 'border-alert' : 'border-border-color',
          disabled ? 'bg-light-gray' : 'bg-light'
        )}
      >
        <Typography type="label" color={disabled ? 'muted' : 'default'}>
          {label}
        </Typography>
        <input
          {...props}
          type={type}
          defaultValue={defaultValue}
          className={cn(disabled ? 'text-text-muted' : 'text-black')}
        />
      </div>
      {!!errorMessage && (
        <Typography type="label" color="alert">
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};
