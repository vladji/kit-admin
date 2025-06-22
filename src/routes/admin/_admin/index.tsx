import { createFileRoute } from '@tanstack/react-router';
import { AdminHomePage } from 'pages/Admin/Home';

export const Route = createFileRoute('/admin/_admin/')({
  component: AdminHomePage,
});
