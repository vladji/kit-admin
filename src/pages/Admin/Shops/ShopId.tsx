import { useLoaderData } from '@tanstack/react-router';
import { ContentContainer } from 'shared/ui/ContentContainer';
import { PageHeader } from 'widgets/PageHeader';

export const ShopIdPage = () => {
  const { shopId } = useLoaderData({ from: '/_admin/shops/$shopId' });

  return (
    <>
      <PageHeader title={shopId} toBack />
      <ContentContainer>
        <div>shop ID</div>
      </ContentContainer>
    </>
  );
};
