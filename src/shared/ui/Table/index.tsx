import type { Key } from 'react';
import {
  TableBody,
  TableBootstrap,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'shared/components/table.tsx';
import { SpinnerBlock } from '../SpinnerBlock';
import type { TableColumnConfig } from './model/types.ts';
import { useTableData } from './model/useTableData.ts';

export interface TableComponentProps<K> {
  columns: TableColumnConfig<K>[];
  data?: K[];
  loading?: boolean;
}

export const Table = <K extends object>({
  columns,
  data,
  loading = false,
}: TableComponentProps<K>) => {
  const tableData = useTableData({ columns, data });

  return (
    <div className="relative flex-1">
      {loading && <SpinnerBlock />}
      <TableBootstrap>
        <TableHeader>
          <TableRow>
            {columns.map(({ id, title }) => (
              <TableHead key={id as Key}>{title}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {!data?.length && (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                🍎
              </TableCell>
            </TableRow>
          )}
          {!!tableData?.length &&
            tableData.map((row, index) => (
              <TableRow key={index}>
                {columns.map(({ id: columnId }) => (
                  <TableCell key={columnId as Key}>
                    {row[columnId as keyof typeof row]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </TableBootstrap>
    </div>
  );
};
