import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from 'app/api/constants.ts';
import { getSellersList } from './requests.ts';

export const useGetSellersList = () => {
  return useQuery({
    queryKey: [QueryKeys.GetSellersList],
    queryFn: getSellersList,
  });
};
