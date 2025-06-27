import { FormattedMessage } from 'react-intl';
import { useGetSellersList } from 'entities/sellers/api/useGetSellersList.ts';

export const AdminHomePage = () => {
  const { data } = useGetSellersList();

  return (
    <section>
      <h1>Admin</h1>
      <h2>
        <FormattedMessage defaultMessage="Привет мир" />
      </h2>
    </section>
  );
};
