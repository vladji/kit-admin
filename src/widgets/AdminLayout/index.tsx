import { Suspense, lazy } from 'react';
import { PageSpinner } from 'shared/ui/PageSpinner';
import { AdminHeader } from 'widgets/AdminHeader';
import { MobileLayout } from './ui/Mobile.tsx';
import { useIsMobile } from '../../shared/hooks/useIsMobile.ts';

const DesktopLayout = lazy(() => import('widgets/AdminLayout/ui/Desktop.tsx'));

export const AdminLayout = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <AdminHeader logoLink="/admin" logoText="admin" logoEmoji="🐳" />
      <Suspense fallback={<PageSpinner />}>
        {isMobile && <MobileLayout />}
        {!isMobile && <DesktopLayout />}
      </Suspense>
    </>
  );
};
