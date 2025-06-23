import { Controller, type FieldValues } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { Select } from 'shared/ui/Fields/Select.tsx';
import type { SubjectFieldProps } from './types.ts';

export const SelectField = <T extends FieldValues>({
  control,
  fieldName,
  label,
  required,
  selectItems,
  error,
}: SubjectFieldProps<T>) => {
  const intl = useIntl();
  const requiredMessage = intl.formatMessage({
    defaultMessage: 'Выберите значение',
  });

  return (
    <Controller
      control={control}
      name={fieldName}
      rules={{
        required: {
          value: !!required,
          message: requiredMessage,
        },
      }}
      render={({ field: { value, onChange } }) => {
        return (
          <Select
            label={label || ''}
            items={selectItems || []}
            value={value}
            onValueChange={onChange}
            errorMessage={error?.message}
          />
        );
      }}
    />
  );
};
