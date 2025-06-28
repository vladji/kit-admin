import type { ComponentProps, FC, ReactElement } from 'react';
import { cn } from '../../styles/utils.ts';
import { Typography } from '../Typography';

export interface InputProps extends ComponentProps<'input'> {
  label: ReactElement | string;
  errorMessage?: string;
  endAdornment?: ReactElement;
}

export const Input: FC<InputProps> = ({
  label,
  errorMessage,
  endAdornment,
  defaultValue,
  type = 'text',
  disabled,
  ...props
}) => {
  return (
    <div className="flex-col-gap-1 flex-1">
      <div
        className={cn(
          'relative flex h-10 items-center rounded-lg border px-2 py-1',
          errorMessage ? 'border-alert' : 'border-border-color',
          disabled ? 'bg-light-gray' : 'bg-light'
        )}
      >
        <Typography
          className="bg-light absolute -top-[7px] block px-1 leading-[1]"
          type="label"
          color={disabled ? 'muted' : 'default'}
        >
          {label}
        </Typography>
        <input
          {...props}
          type={type}
          defaultValue={defaultValue}
          className={cn(disabled ? 'text-text-muted' : 'text-black')}
        />
        {!!endAdornment && endAdornment}
      </div>
      {!!errorMessage && (
        <Typography className="leading-[1]" type="label" color="alert">
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};
