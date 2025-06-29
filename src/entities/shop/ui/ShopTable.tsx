import { useCallback } from 'react';
import { Table } from 'shared/ui/Table';
import type { OnTableRowClick } from 'shared/ui/Table/model/types.ts';
import { shopTableColumns } from '../model/tableConfig.tsx';
import { useShopTableData } from '../model/useShopTableData.ts';

export const ShopTable = () => {
  const { tableData, loading } = useShopTableData();

  const onRowClick = useCallback<OnTableRowClick>((data) => {
    console.log('onRowClick', data);
  }, []);

  return (
    <Table
      columns={shopTableColumns}
      data={tableData}
      loading={loading}
      onRowClick={onRowClick}
    />
  );
};
