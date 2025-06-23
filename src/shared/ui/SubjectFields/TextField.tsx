import { Controller, type FieldValues } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { Input } from 'shared/ui/Fields/Input.tsx';
import type { SubjectFieldProps } from './types.ts';

export const TextField = <T extends FieldValues>({
  control,
  fieldName,
  label,
  error,
  minLength,
  maxLength,
  regExpPattern,
  required = false,
  ...props
}: SubjectFieldProps<T>) => {
  const intl = useIntl();
  const requiredFallbackMessage = intl.formatMessage({
    defaultMessage: 'Необходимо заполнить',
  });

  const minLengthMessage = intl.formatMessage(
    {
      defaultMessage: 'Минимальное количество символов: {minLength}',
    },
    {
      minLength,
    }
  );

  const maxLengthMessage = intl.formatMessage(
    {
      defaultMessage: 'Максимальное количество символов: {maxLength}',
    },
    {
      maxLength,
    }
  );

  const invalidFallbackMessage = intl.formatMessage({
    defaultMessage: 'Некорректное значение',
  });

  return (
    <Controller
      control={control}
      name={fieldName}
      rules={{
        required: {
          value: required,
          message: requiredFallbackMessage,
        },
        minLength: minLength && {
          value: minLength,
          message: minLengthMessage,
        },
        maxLength: maxLength && {
          value: maxLength,
          message: maxLengthMessage,
        },
        pattern: regExpPattern && {
          value: regExpPattern,
          message: invalidFallbackMessage,
        },
      }}
      render={({ field: { value = '', onChange } }) => (
        <Input
          {...props}
          label={label || ''}
          value={value}
          onChange={onChange}
          errorMessage={error?.message}
        />
      )}
    />
  );
};
