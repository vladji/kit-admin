import { createFileRoute } from '@tanstack/react-router';
import { AdminLayout } from 'shared/ui/Layout/AdminLayout.tsx';

export const Route = createFileRoute('/admin/_admin')({
  component: AdminLayout,
});
