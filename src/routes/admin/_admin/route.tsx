import { createFileRoute } from '@tanstack/react-router';
import { AdminLayout } from 'widgets/AdminLayout';

export const Route = createFileRoute('/admin/_admin')({
  component: AdminLayout,
});
