import { Suspense, lazy } from 'react';
import { useIsMobile } from 'shared/hooks/useIsMobile.ts';
import type {
  OnTableRowClick,
  TableColumnConfig,
  TableProps,
} from './model/types.ts';
import { TableMobile } from './ui/TableMobile.tsx';

const TableDesktop = lazy(() => import('shared/ui/Table/ui/TableDesktop.tsx'));

export const Table = <K extends object>(props: TableProps<K>) => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile && <TableMobile {...props} />}
      {!isMobile && (
        <Suspense fallback={null}>
          <TableDesktop
            {...props}
            onRowClick={props.onRowClick as OnTableRowClick<object>}
            columns={props.columns as TableColumnConfig<object>[]}
          />
        </Suspense>
      )}
    </>
  );
};
