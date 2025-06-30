import { FormattedMessage } from 'react-intl';
import { ShopTable } from 'entities/shop/ui/ShopTable.tsx';
import { CreateShop } from 'features/CreateShop';
import { ContentContainer } from 'shared/ui/ContentContainer';
import { PageHeader } from 'widgets/PageHeader';

export const ShopsPage = () => {
  return (
    <>
      <PageHeader title={<FormattedMessage defaultMessage="Магазины" />}>
        <CreateShop />
      </PageHeader>
      <ContentContainer>
        <ShopTable />
      </ContentContainer>
    </>
  );
};
