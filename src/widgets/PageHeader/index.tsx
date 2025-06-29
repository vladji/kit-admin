import type { FC, ReactElement } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GhostButton } from 'shared/ui/Buttons/GhostButton.tsx';
import { Typography } from 'shared/ui/Typography';

interface Props {
  children?: ReactElement;
  title?: ReactElement;
  toBack?: boolean;
}

export const PageHeader: FC<Props> = ({ children, title, toBack }) => {
  return (
    <div className="bg-light sticky top-0 flex h-[68px] items-center justify-between px-4">
      <div className="flex-gap-2 items-center">
        {toBack && <GhostButton link="../" Icon={ArrowLeft} />}
        {!!title && (
          <Typography as="h3" type="title">
            {title}
          </Typography>
        )}
      </div>
      {!!children && children}
    </div>
  );
};
