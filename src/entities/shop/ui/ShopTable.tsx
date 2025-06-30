import { useCallback } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Table } from 'shared/ui/Table';
import type { OnTableRowClick } from 'shared/ui/Table/model/types.ts';
import { shopTableColumns } from '../model/tableConfig.tsx';
import type { ShopTableProps } from '../model/types.ts';
import { useShopTableData } from '../model/useShopTableData.ts';

export const ShopTable = () => {
  const navigate = useNavigate({ from: '/shops/$shopId' });
  const { tableData, loading } = useShopTableData();

  const onRowClick = useCallback<OnTableRowClick<ShopTableProps>>(
    (data) => {
      navigate({
        to: '/shops/$shopId',
        params: { shopId: data.uniqId as string },
      });
    },
    [navigate]
  );

  return (
    <Table
      columns={shopTableColumns}
      data={tableData}
      loading={loading}
      onRowClick={onRowClick}
    />
  );
};
