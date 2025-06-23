import type { FC } from 'react';
import { Languages } from 'lucide-react';
import { LocaleSelect } from 'features/LocaleSelect';
import { Typography } from 'shared/ui/Typography';

export const Header: FC = () => {
  return (
    <header className="block-shadow screen-padding flex items-center justify-between gap-8">
      <Typography as="h1" type="title">
        KIT admin
      </Typography>
      <div className="flex items-center gap-2">
        <Languages />
        <LocaleSelect />
      </div>
    </header>
  );
};
