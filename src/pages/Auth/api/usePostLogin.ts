import { useMutation } from '@tanstack/react-query';
import { UserRole } from 'app/config/types.ts';
import { router } from 'app/providers/RouterProvider';
import { LocalStorageKeys } from 'app/storage/types.ts';
import { getTokenPayload } from 'shared/utils/jwt.ts';
import { postLogin } from './requests.ts';
import type { LoginResponseProps, PostLoginProps } from './types.ts';

export const usePostLogin = () => {
  const { mutateAsync } = useMutation<Response, unknown, PostLoginProps>({
    mutationFn: (data) => postLogin(data),
    onSuccess: async (response) => {
      const data = (await response.json()) as LoginResponseProps;

      if (data.accessToken) {
        localStorage.setItem(LocalStorageKeys.Token, data.accessToken);

        const userRole = getTokenPayload()?.role;

        if (userRole === UserRole.Admin) {
          router.navigate({ to: '/admin', replace: true });
        }

        if (userRole === UserRole.Seller) {
          router.navigate({ to: '/seller', replace: true });
        }
      }
    },
  });

  return {
    postLogin: mutateAsync,
  };
};
