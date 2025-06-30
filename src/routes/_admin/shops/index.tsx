import { createFileRoute } from '@tanstack/react-router';
import { ShopsPage } from 'pages/Admin/Shops';

export const Route = createFileRoute('/_admin/shops/')({
  component: ShopsPage,
});
