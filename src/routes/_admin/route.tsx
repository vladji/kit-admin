import { createFileRoute, redirect } from '@tanstack/react-router';
import { UserRole } from 'app/config/types.ts';
import { getTokenPayload } from 'shared/utils/jwt.ts';
import { AdminLayout } from 'widgets/AdminLayout';

export const Route = createFileRoute('/_admin')({
  component: AdminLayout,
  beforeLoad: () => {
    const isAdmin = getTokenPayload()?.role === UserRole.Admin;
    if (!isAdmin) {
      throw redirect({
        to: '/',
      });
    }
  },
});
