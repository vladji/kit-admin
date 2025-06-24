import type { ComponentProps, FC, ReactElement } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { FormattedMessage } from 'react-intl';
import {
  SelectBootstrap,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'shared/components/select.tsx';
import { cn } from 'shared/styles/utils.ts';
import { Typography } from 'shared/ui/Typography';

export interface SelectItemsProps {
  value: string;
  title: ReactElement | string;
}

interface Props extends ComponentProps<typeof SelectPrimitive.Root> {
  items: SelectItemsProps[];
  label?: ReactElement | string;
  errorMessage?: string;
}

export const Select: FC<Props> = ({ items, label, errorMessage, ...props }) => {
  return (
    <SelectBootstrap {...props}>
      <div className="flex-col-gap-2">
        <SelectTrigger
          className={cn(errorMessage && 'border-border-alert')}
          size="sm"
        >
          <div className="flex flex-col items-start">
            {!!label && <Typography type="label">{label}</Typography>}
            <SelectValue
              placeholder={<FormattedMessage defaultMessage="Выберите" />}
            />
          </div>
        </SelectTrigger>
        {!!errorMessage && (
          <span className="text-alert text-xs leading-[130%] font-normal">
            {errorMessage}
          </span>
        )}
      </div>
      <SelectContent>
        {items.map(({ value, title }) => (
          <SelectItem key={value} value={value}>
            {title}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectBootstrap>
  );
};
