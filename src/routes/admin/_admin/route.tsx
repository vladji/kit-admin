import { createFileRoute, redirect } from '@tanstack/react-router';
import { Role } from 'app/config/types.ts';
import { getTokenPayload } from 'shared/utils/jwt.ts';
import { AdminLayout } from 'widgets/AdminLayout';

export const Route = createFileRoute('/admin/_admin')({
  component: AdminLayout,
  beforeLoad: ({ location }) => {
    const isAdmin = getTokenPayload()?.role === Role.Admin;

    if (!isAdmin) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
