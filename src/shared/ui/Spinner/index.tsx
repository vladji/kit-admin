import './styles.css';
import type { FC } from 'react';
import { cn } from 'shared/styles/utils.ts';

interface Props {
  size?: number;
  light?: boolean;
  narrow?: boolean;
}

export const Spinner: FC<Props> = ({
  size = 80,
  light = false,
  narrow = false,
}) => (
  <div style={{ width: `${size}px`, height: `${size}px` }}>
    <div className={cn('lds-ring', { light }, { narrow })}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
