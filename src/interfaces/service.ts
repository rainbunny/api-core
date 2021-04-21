import type {Command, Context, Entity, GetByIdQuery, OffsetQueryResult, Query} from '@lib/interfaces';
import type {Observable} from 'rxjs';
import type {CursorQueryResult} from './query-result';

export interface Service<E extends Entity, QueryResult extends OffsetQueryResult<E> | CursorQueryResult<E>> {
  find?: (query: Query, context: Context) => Observable<QueryResult>;
  getById?: (query: GetByIdQuery, context: Context) => Observable<E | undefined>;
  create?: (command: Command, context: Context) => Observable<string>;
  update?: (command: Command, context: Context) => Observable<void>;
  remove?: (command: Command, context: Context) => Observable<void>;
}
