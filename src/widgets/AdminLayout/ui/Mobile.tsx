import { Outlet } from '@tanstack/react-router';
import { House, Store } from 'lucide-react';
import { FormattedMessage } from 'react-intl';
import { BottomNavButton } from './BottomNavButton.tsx';

export const MobileLayout = () => {
  return (
    <>
      <main className="main pb-(bottom-nav-bar-height)">
        <Outlet />
      </main>
      <nav className="h-(bottom-nav-bar-height) block-shadow-top fixed right-0 bottom-0 left-0 flex h-[64px] items-center justify-evenly gap-4 px-4 py-3">
        <BottomNavButton
          link="/admin"
          Icon={House}
          text={<FormattedMessage defaultMessage="Главная" />}
        />
        <BottomNavButton
          link="/shops"
          Icon={Store}
          text={<FormattedMessage defaultMessage="Магазины" />}
        />
      </nav>
    </>
  );
};
