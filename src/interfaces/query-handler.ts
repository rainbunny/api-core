import type {Observable} from 'rxjs';
import type {Context} from './context';
import type {Entity} from './entity';
import type {Query} from './query';
import type {QueryResult} from './query-result';

export type QueryHandler<
  Id = string,
  E extends Entity<Id> = Entity<Id>,
  Q extends Query = Query,
  R extends QueryResult<E> | E = QueryResult<E> | E
> = (query: Q, context: Context) => Observable<R>;
