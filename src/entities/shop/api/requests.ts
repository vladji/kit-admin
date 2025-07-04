import api from 'app/api';
import type { ShopProps } from '../model/types.ts';

export const getShopList = () =>
  api({
    url: '/admin/shops-list',
  }).then((response): ShopProps[] => response.data);
