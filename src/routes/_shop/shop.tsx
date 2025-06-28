import { createFileRoute } from '@tanstack/react-router';
import { ShopHomePage } from '../../pages/Shop/Home';

export const Route = createFileRoute('/_shop/shop')({
  component: ShopHomePage,
});
