import { useMemo } from 'react';
import type { ShopTableProps } from './types.ts';
import { useGetShopsList } from '../api/useGetShopsList.ts';

export const useShopTableData = () => {
  const { data, isLoading } = useGetShopsList();

  const tableData = useMemo(() => {
    return data?.map<ShopTableProps>((item) => ({
      id: item.uniqId,
      uniqId: item.uniqId,
      name: item.shopProfile.name,
      profileCompleted: item.profileCompleted ? '✅' : '❌',
      hasMenu: item.hasMenu ? '✅' : '❌',
      enabled: item.enabled ? '✅' : '❌',
      published: item.published ? '✅' : '❌',
    }));
  }, [data]);

  return {
    tableData,
    loading: isLoading,
  };
};
