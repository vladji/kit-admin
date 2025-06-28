import { useContext } from 'react';
import { Languages } from 'lucide-react';
import { AppContext } from 'app/context';
import { Locales } from 'app/locales/types.ts';
import { Select, type SelectItemsProps } from 'shared/ui/Fields/Select.tsx';

const selectItems: SelectItemsProps[] = [
  {
    value: Locales.RU,
    title: 'RU',
  },
  {
    value: Locales.EN,
    title: 'EN',
  },
];

export const LocaleSelect = () => {
  const { locale, setLocale } = useContext(AppContext);

  const onValueChange = (value: Locales) => {
    setLocale(value);
  };

  return (
    <div className="flex items-center gap-2">
      <Languages />
      <Select
        items={selectItems}
        defaultValue={locale}
        onValueChange={onValueChange}
      />
    </div>
  );
};
