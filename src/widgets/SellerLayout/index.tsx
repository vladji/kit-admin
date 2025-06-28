import { Suspense } from 'react';
import { Outlet } from '@tanstack/react-router';
import { PageSpinner } from 'shared/ui/PageSpinner';
import { SellerHeader } from '../SellerHeader';

export const SellerLayout = () => {
  return (
    <>
      <SellerHeader />
      <Suspense fallback={<PageSpinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};
