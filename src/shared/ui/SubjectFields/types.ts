import type { ComponentProps, ReactElement } from 'react';
import type {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  Merge,
  ValidateResult,
} from 'react-hook-form';
import type { SelectItemsProps } from 'shared/ui/Fields/Select.tsx';

export interface SubjectFieldProps<T extends FieldValues>
  extends Omit<ComponentProps<'input'>, 'defaultValue'> {
  control: Control<T>;
  fieldName: FieldPath<T>;
  label?: ReactElement | string;
  defaultValue?: string;
  validate?: (value: string) => ValidateResult;
  regExpPattern?: RegExp;
  error?: FieldError | Merge<FieldError, (FieldError | undefined)[]>;
  selectItems?: SelectItemsProps[];
  maxValue?: number;
  minValue?: number;
  maxValueMessage?: string;
  minValueMessage?: string;
  invalidMessage?: string;
}
