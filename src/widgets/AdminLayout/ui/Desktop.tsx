import { Outlet } from '@tanstack/react-router';
import { House, Store } from 'lucide-react';
import { FormattedMessage } from 'react-intl';
import { GhostButton } from 'shared/ui/Buttons/GhostButton.tsx';
import { DesktopSidebar } from 'shared/ui/DesktopSidebar';

const DesktopLayout = () => {
  return (
    <main className="flex flex-1">
      <DesktopSidebar>
        <GhostButton link="/admin" Icon={House}>
          <FormattedMessage defaultMessage="Главная" />
        </GhostButton>
        <GhostButton link="/shops" Icon={Store}>
          <FormattedMessage defaultMessage="Магазины" />
        </GhostButton>
      </DesktopSidebar>
      <section className="flex-1 overflow-auto">
        <Outlet />
      </section>
    </main>
  );
};

export default DesktopLayout;
