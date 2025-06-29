import { House, Store } from 'lucide-react';
import { FormattedMessage } from 'react-intl';
import type { BottomNavButtonProps } from 'shared/ui/Buttons/BottomNavButton.tsx';

export const bottomNavBarConfig: BottomNavButtonProps[] = [
  {
    link: '/admin',
    Icon: House,
    text: <FormattedMessage defaultMessage="Главная" />,
  },
  {
    link: '/shops',
    Icon: Store,
    text: <FormattedMessage defaultMessage="Магазины" />,
  },
];
