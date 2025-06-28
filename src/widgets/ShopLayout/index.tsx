import { Suspense } from 'react';
import { Outlet } from '@tanstack/react-router';
import { PageSpinner } from 'shared/ui/PageSpinner';
import { ShopHeader } from '../ShopHeader';

export const ShopLayout = () => {
  return (
    <>
      <ShopHeader />
      <Suspense fallback={<PageSpinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};
