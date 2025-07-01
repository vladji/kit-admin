import { useMutation } from '@tanstack/react-query';
import { postCreateShop } from './requests.ts';
import type { PostCreateShopResponse, ShopMinimalDataProps } from '../types.ts';

export const usePostCreateShop = () => {
  const { mutateAsync, isPending } = useMutation<
    PostCreateShopResponse,
    unknown,
    ShopMinimalDataProps
  >({
    mutationFn: (data) => postCreateShop(data),
  });

  return {
    createShop: mutateAsync,
    loading: isPending,
  };
};
