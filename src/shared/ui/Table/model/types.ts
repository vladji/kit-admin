import type { ReactElement, ReactNode } from 'react';

export interface TableColumnConfig<K> {
  id: keyof K;
  title: string | ReactElement;
}

type ValidTableId<K, T extends TableColumnConfig<K>[]> = T[number]['id'];

export interface TableRowMinimalProps {
  id: string;
}

export type TableDataConfig<
  K,
  T extends TableColumnConfig<K>[],
> = TableRowMinimalProps & {
  [E in ValidTableId<K, T>]: string | number | ReactNode;
};

export type OnTableRowClick<K> = (
  data: TableDataConfig<K, TableColumnConfig<K>[]>
) => void;

export interface TableProps<K> {
  columns: TableColumnConfig<K>[];
  data?: K[];
  loading?: boolean;
  onRowClick?: OnTableRowClick<K>;
}
