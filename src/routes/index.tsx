import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from 'pages/Auth';

export const Route = createFileRoute('/')({
  component: AuthPage,
});
