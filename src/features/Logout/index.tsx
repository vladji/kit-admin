import { LogOut } from 'lucide-react';
import { STATUS } from 'app/api/constants.ts';
import { LocalStorageKeys } from 'app/storage/types.ts';
import { postLogout } from 'pages/Auth/api/requests.ts';
import { GhostButton } from 'shared/ui/Buttons/GhostButton.tsx';
import { router } from '../../app/providers/RouterProvider';

export const Logout = () => {
  const onClick = async () => {
    localStorage.removeItem(LocalStorageKeys.Token);
    const response = await postLogout();
    if (response.status === STATUS.SUCCESS) {
      router.navigate({ to: '/', replace: true });
    }
  };

  return <GhostButton onClick={onClick} Icon={LogOut} />;
};
