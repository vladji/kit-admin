import { Outlet } from '@tanstack/react-router';
import { AdminHeader } from './AdminHeader.tsx';

export const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  );
};
