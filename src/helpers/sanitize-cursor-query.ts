import type {CursorQuery} from '../interfaces';
import {config} from '../config';

export const sanitizeCursorQuery = <T extends CursorQuery>(query: T): T => ({
  ...query,
  rowsPerPage: Math.min(
    Math.max(((query as unknown) as CursorQuery).rowsPerPage || config().MAX_ROWS_PER_PAGE, 1),
    config().MAX_ROWS_PER_PAGE,
  ),
});
