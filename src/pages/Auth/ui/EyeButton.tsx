import type { FC } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface Props {
  isHide: boolean;
  onClick: () => void;
}

export const EyeButton: FC<Props> = ({ isHide, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {isHide ? <Eye strokeWidth={1} /> : <EyeOff strokeWidth={1} />}
    </button>
  );
};
