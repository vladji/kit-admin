import api from 'app/api';
import type { ShopProps } from '../model/types.ts';

export const getShopList = () =>
  api({
    url: '/shops-list',
  }).then((response): ShopProps[] => response.data);
