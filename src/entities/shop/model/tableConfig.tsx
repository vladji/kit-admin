import { FormattedMessage } from 'react-intl';
import type { TableColumnConfig } from 'shared/ui/Table/model/types.ts';
import type { ShopTableProps } from './types.ts';

export const shopTableColumns: TableColumnConfig<ShopTableProps>[] = [
  {
    id: 'uniqId',
    title: 'ID',
  },
  {
    id: 'name',
    title: <FormattedMessage defaultMessage="Имя" />,
  },
  {
    id: 'profileCompleted',
    title: <FormattedMessage defaultMessage="Профиль" />,
  },
  {
    id: 'hasMenu',
    title: <FormattedMessage defaultMessage="Меню" />,
  },
  {
    id: 'enabled',
    title: <FormattedMessage defaultMessage="Включен" />,
  },
  {
    id: 'published',
    title: <FormattedMessage defaultMessage="Опубликован" />,
  },
];
