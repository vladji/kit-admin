import { useMemo } from 'react';

import type {
  TableColumnConfig,
  TableDataConfig,
  TableProps,
  TableRowMinimalProps,
} from './types.ts';

const hasId = <K extends object>(item: K): item is K & TableRowMinimalProps => {
  return 'id' in item;
};

export const useTableData = <
  K extends object,
  T extends TableColumnConfig<K>[],
>({
  columns,
  data,
}: TableProps<K>) => {
  return useMemo(() => {
    if (data) {
      return data.map<TableDataConfig<K, T>>((item) => {
        if (!hasId(item)) {
          throw new Error('');
        }
        const tableRow = columns.reduce(
          (acc, { id: columnId }) => ({
            ...acc,
            [columnId]: item[columnId],
          }),
          {} as TableDataConfig<K, T>
        );

        tableRow.id = String(item.id);
        return tableRow;
      });
    }
  }, [data, columns]);
};
