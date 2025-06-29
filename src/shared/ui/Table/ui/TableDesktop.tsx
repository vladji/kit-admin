import type { Key } from 'react';
import {
  TableBody,
  TableBootstrap,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'shared/components/table.tsx';
import { SpinnerBlock } from 'shared/ui/SpinnerBlock';
import type { TableProps } from '../model/types.ts';
import { useTableData } from '../model/useTableData.ts';

const TableDesktop = <K extends object>({
  columns,
  data,
  loading = false,
  onRowClick,
}: TableProps<K>) => {
  const tableData = useTableData({ columns, data });

  return (
    <div className="relative flex-1">
      {loading && <SpinnerBlock />}
      <TableBootstrap>
        <TableHeader>
          <TableRow disabledHover>
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
              <TableRow key={index} onClick={() => onRowClick?.(row)}>
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

export default TableDesktop;
