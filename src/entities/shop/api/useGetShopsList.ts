import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from 'app/api/constants.ts';
import { getShopList } from './requests.ts';

export const useGetShopsList = () => {
  return useQuery({
    queryKey: [QueryKeys.GetShopsList],
    queryFn: getShopList,
  });
};
