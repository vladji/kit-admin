import { Suspense, lazy } from 'react';
import { useIsMobile } from 'shared/hooks/useIsMobile.ts';
import type { TableColumnConfig, TableProps } from './model/types.ts';
import { TableMobile } from './ui/TableMobile.tsx';

const TableDesktop = lazy(() => import('shared/ui/Table/ui/TableDesktop.tsx'));

export const Table = <K extends object>({
  columns,
  data,
  loading = false,
}: TableProps<K>) => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile && (
        <TableMobile columns={columns} data={data} loading={loading} />
      )}
      {!isMobile && (
        <Suspense fallback={null}>
          <TableDesktop
            columns={columns as TableColumnConfig<object>[]}
            data={data}
            loading={loading}
          />
        </Suspense>
      )}
    </>
  );
};
