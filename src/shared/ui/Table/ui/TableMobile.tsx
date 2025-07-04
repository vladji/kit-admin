import type { Key } from 'react';
import { SpinnerBlock } from 'shared/ui/SpinnerBlock';
import { Typography } from '../../Typography';
import type { TableProps } from '../model/types.ts';
import { useTableData } from '../model/useTableData.ts';

export const TableMobile = <K extends object>({
  columns,
  data,
  loading = false,
  onRowClick,
}: TableProps<K>) => {
  const tableData = useTableData({ columns, data });

  return (
    <>
      {loading && <SpinnerBlock />}
      <ul className="flex-col-gap-4">
        {tableData?.map((row) => (
          <li
            key={row.id}
            className="flex-col-gap-2 border-border-color rounded-sm border-1 p-4"
            onClick={() => onRowClick?.(row)}
          >
            {columns.map(({ id, title }) => (
              <div
                key={id as Key}
                className="flex-gap-3 border-disabled items-center justify-between border-b pb-1 last:border-b-0"
              >
                <Typography variant="semibold">{title}</Typography>
                <Typography>{row[id]}</Typography>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};
