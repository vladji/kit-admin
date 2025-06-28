import type { FC } from 'react';
import { LocaleSelect } from 'features/LocaleSelect';
import { HeaderTemplate } from 'shared/ui/HeaderTemplate';

export const Header: FC = () => {
  return (
    <HeaderTemplate>
      <LocaleSelect />
    </HeaderTemplate>
  );
};
