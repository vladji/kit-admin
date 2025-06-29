import type { FC } from 'react';
import {
  BottomNavButton,
  type BottomNavButtonProps,
} from 'shared/ui/Buttons/BottomNavButton.tsx';

interface Props {
  buttons: BottomNavButtonProps[];
}

export const BottomNavBar: FC<Props> = ({ buttons }) => {
  return (
    <nav className="bg-light block-shadow-top fixed right-0 bottom-0 left-0 flex h-(--bottom-nav-bar-height) items-center justify-evenly gap-4 px-4 py-3">
      {buttons.map(({ link, Icon, text }) => (
        <BottomNavButton key={link} link={link} Icon={Icon} text={text} />
      ))}
    </nav>
  );
};
