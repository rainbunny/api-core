import type {Entity} from './entity';
import type {GetByIdQuery, Query} from './query';

export interface ReadRepository<Id = string, E extends Entity<Id> = Entity<Id>, Q extends Query = Query> {
  find?: (query: Q) => Promise<E[]>;
  count?: (query: Q) => Promise<number>;
  getById?: (query: GetByIdQuery<Id>) => Promise<E | undefined>;
}
