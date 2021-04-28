import {config} from '@lib/config';
import {OffsetQuery} from '@lib/interfaces';

export const sanitizeOffsetQuery = <T extends OffsetQuery>(query: T): T => ({
  ...query,
  pageIndex: Math.max(((query as unknown) as OffsetQuery).pageIndex || 0, 0),
  itemsPerPage: Math.min(
    ((query as unknown) as OffsetQuery).itemsPerPage || config().DEFAULT_ITEMS_PER_PAGE,
    config().MAX_ITEMS_PER_PAGE,
  ),
});
