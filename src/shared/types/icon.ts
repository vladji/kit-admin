import type { ReactNode, SVGProps } from 'react';

export interface LucideIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

export type LucideIconFC = (
  props: SVGProps<SVGSVGElement> & LucideIconProps
) => ReactNode;
