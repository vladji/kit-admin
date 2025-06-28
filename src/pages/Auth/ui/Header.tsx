import type { FC } from 'react';
import { Languages } from 'lucide-react';
import { LocaleSelect } from 'features/LocaleSelect';
import { HeaderTemplate } from 'shared/ui/HeaderTemplate';

export const Header: FC = () => {
  return (
    <HeaderTemplate>
      <Languages />
      <LocaleSelect />
    </HeaderTemplate>
  );
};
