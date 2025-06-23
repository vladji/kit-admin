import { Suspense } from 'react';
import { Outlet } from '@tanstack/react-router';
import { PageSpinner } from 'shared/ui/PageSpinner';
import { AdminHeader } from 'widgets/AdminHeader';

export const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <Suspense fallback={<PageSpinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};
