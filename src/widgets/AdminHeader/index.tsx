import { LocaleSelect } from 'features/LocaleSelect';
import { Logout } from 'features/Logout';
import { HeaderTemplate } from 'shared/ui/HeaderTemplate';

export const AdminHeader = () => {
  return (
    <HeaderTemplate>
      <div className="flex-gap-6">
        <LocaleSelect />
        <Logout />
      </div>
    </HeaderTemplate>
  );
};
