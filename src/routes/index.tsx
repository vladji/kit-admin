import { createFileRoute, redirect } from '@tanstack/react-router';
import { UserRole } from 'app/config/types.ts';
import { AuthPage } from 'pages/Auth';
import { getTokenPayload } from 'shared/utils/jwt.ts';

export const Route = createFileRoute('/')({
  component: AuthPage,
  beforeLoad: () => {
    const role = getTokenPayload()?.role;

    if (role === UserRole.Admin) {
      throw redirect({
        to: '/admin',
      });
    }

    if (role === UserRole.Seller) {
      throw redirect({
        to: '/seller',
      });
    }
  },
});
