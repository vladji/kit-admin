import { createFileRoute, redirect } from '@tanstack/react-router';
import { getTokenPayload } from 'shared/utils/jwt.ts';
import { AdminLayout } from 'widgets/AdminLayout';

export const Route = createFileRoute('/_admin')({
  component: AdminLayout,
  beforeLoad: () => {
    const isAdmin = !!getTokenPayload()?.roles.admin;
    if (!isAdmin) {
      throw redirect({
        to: '/',
      });
    }
  },
});
