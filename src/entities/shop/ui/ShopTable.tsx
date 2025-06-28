import { Table } from 'shared/ui/Table';
import { shopTableColumns } from '../model/tableConfig.tsx';
import { useShopTableData } from '../model/useShopTableData.ts';

export const ShopTable = () => {
  const { tableData, loading } = useShopTableData();

  return (
    <Table columns={shopTableColumns} data={tableData} loading={loading} />
  );
};
