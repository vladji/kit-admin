import { createFileRoute, redirect } from '@tanstack/react-router';
import { LocalStorageKeys } from 'app/storage/types.ts';
import { ShopLayout } from 'widgets/ShopLayout';

export const Route = createFileRoute('/_shop')({
  component: ShopLayout,
  beforeLoad: () => {
    const token = localStorage.getItem(LocalStorageKeys.Token);
    if (!token) {
      throw redirect({
        to: '/',
      });
    }
  },
});
