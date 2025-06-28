import { createFileRoute, redirect } from '@tanstack/react-router';
import { LocalStorageKeys } from 'app/storage/types.ts';
import { SellerLayout } from 'widgets/SellerLayout';

export const Route = createFileRoute('/_seller')({
  component: SellerLayout,
  beforeLoad: () => {
    const token = localStorage.getItem(LocalStorageKeys.Token);
    if (!token) {
      throw redirect({
        to: '/',
      });
    }
  },
});
