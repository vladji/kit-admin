import type { FC } from 'react';
import { LocaleSelect } from 'features/LocaleSelect';
import { Logout } from 'features/Logout';
import {
  HeaderTemplate,
  type HeaderTemplateProps,
} from 'shared/ui/HeaderTemplate';

type Props = Omit<HeaderTemplateProps, 'children'>;

export const AdminHeader: FC<Props> = (props) => {
  return (
    <HeaderTemplate {...props}>
      <div className="flex-gap-6">
        <LocaleSelect />
        <Logout />
      </div>
    </HeaderTemplate>
  );
};
