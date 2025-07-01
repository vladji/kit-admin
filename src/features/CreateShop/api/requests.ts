import api from 'app/api';
import type { PostCreateShopResponse, ShopMinimalDataProps } from '../types.ts';

export const postCreateShop = (data: ShopMinimalDataProps) =>
  api({
    url: '/admin/create-shop',
    method: 'POST',
    data,
  }).then((response): PostCreateShopResponse => response.data);
