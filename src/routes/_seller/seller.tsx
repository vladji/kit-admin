import { createFileRoute } from '@tanstack/react-router';
import { SellerHomePage } from '../../pages/Seller/Home';

export const Route = createFileRoute('/_seller/seller')({
  component: SellerHomePage,
});
