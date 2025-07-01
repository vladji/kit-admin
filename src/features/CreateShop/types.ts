import type { BaseApiResponse } from 'app/api/types.ts';
import type { ShopProps } from 'entities/shop/model/types.ts';

export interface PostCreateShopResponse extends BaseApiResponse {
  shop: ShopProps;
}

export interface ShopMinimalDataProps {
  uniqId: string;
  rootPass: string;
  shopAdminPass: string;
}
