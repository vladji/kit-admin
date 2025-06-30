import { createFileRoute } from '@tanstack/react-router';
import { ShopIdPage } from 'pages/Admin/Shops/ShopId.tsx';

export const Route = createFileRoute('/_admin/shops/$shopId')({
  component: ShopIdPage,
  loader: ({ params }) => params,
});
