import { ShopTable } from 'entities/shop/ui/ShopTable.tsx';

export const AdminHomePage = () => {
  return (
    <section className="block-padding">
      <h1>Admin</h1>
      <ShopTable />
    </section>
  );
};
