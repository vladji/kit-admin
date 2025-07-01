import type { FC, ReactElement } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GhostButton } from 'shared/ui/Buttons/GhostButton.tsx';
import { Typography } from 'shared/ui/Typography';

interface Props {
  children?: ReactElement;
  title?: string | ReactElement;
  toBack?: boolean;
}

export const PageHeader: FC<Props> = ({ children, title, toBack }) => {
  return (
    <div className="bg-light sticky top-0 flex items-center px-4 py-4">
      <div className="flex-gap-2 flex-1 items-start justify-between">
        <div className="flex-gap-2 items-center">
          {toBack && <GhostButton link="../" Icon={ArrowLeft} iconSize={22} />}
          {!!title && (
            <Typography as="h3" type="title">
              {title}
            </Typography>
          )}
        </div>
        {!!children && children}
      </div>
    </div>
  );
};
