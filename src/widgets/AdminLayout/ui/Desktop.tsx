import { Outlet } from '@tanstack/react-router';
import { House, Store } from 'lucide-react';
import { FormattedMessage } from 'react-intl';
import { GhostButton } from 'shared/ui/Buttons/GhostButton.tsx';
import { DesktopSidebar } from 'shared/ui/DesktopSidebar';

const DesktopLayout = () => {
  return (
    <main className="main-desktop-height flex flex-1 overflow-y-auto">
      <DesktopSidebar>
        <GhostButton link="/admin" Icon={House}>
          <FormattedMessage defaultMessage="Главная" />
        </GhostButton>
        <GhostButton link="/shops" Icon={Store}>
          <FormattedMessage defaultMessage="Магазины" />
        </GhostButton>
      </DesktopSidebar>
      <section className="flex flex-1 flex-col">
        <Outlet />
      </section>
    </main>
  );
};

export default DesktopLayout;
