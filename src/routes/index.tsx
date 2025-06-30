import { createFileRoute, redirect } from '@tanstack/react-router';
import { AuthPage } from 'pages/Auth';
import { getTokenPayload } from 'shared/utils/jwt.ts';

export const Route = createFileRoute('/')({
  component: AuthPage,
  beforeLoad: () => {
    const roles = getTokenPayload()?.roles;

    if (roles?.admin) {
      throw redirect({
        to: '/admin',
      });
    }

    if (roles?.shop) {
      throw redirect({
        to: '/shop',
      });
    }
  },
});
