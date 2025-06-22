import { Suspense } from 'react';
import { Outlet } from '@tanstack/react-router';
import { PageSpinner } from 'shared/ui/PageSpinner';
import { AdminHeader } from './AdminHeader.tsx';

export const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Suspense fallback={<PageSpinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
