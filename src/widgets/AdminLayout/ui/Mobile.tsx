import { Outlet } from '@tanstack/react-router';
import { BottomNavBar } from 'widgets/BottomNavBar';
import { bottomNavBarConfig } from '../model/config.tsx';

export const MobileLayout = () => {
  return (
    <>
      <main className="main pb-(--bottom-nav-bar-height)">
        <Outlet />
      </main>
      <BottomNavBar buttons={bottomNavBarConfig} />
    </>
  );
};
