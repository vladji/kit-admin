import type { ReactNode } from 'react';

export const DesktopSidebar = ({ children }: { children: ReactNode }) => {
  return (
    <aside className="flex-col-gap-4 border-disabled block-shadow min-w-[260px] border-r px-6 py-6">
      {children}
    </aside>
  );
};
