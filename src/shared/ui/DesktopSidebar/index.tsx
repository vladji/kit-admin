import type { ReactNode } from 'react';

export const DesktopSidebar = ({ children }: { children: ReactNode }) => {
  return (
    <aside className="main-desktop-height flex-col-gap-4 border-disabled block-shadow min-w-[260px] overflow-y-auto border-r px-6 py-6">
      {children}
    </aside>
  );
};
