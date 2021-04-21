import type {Observable} from 'rxjs';
import type {Entity} from './entity';
import type {GetByIdQuery} from './query';

export interface WriteRepository<Id = string, E extends Entity<Id> = Entity<Id>> {
  getById?: (query: GetByIdQuery<Id>) => Observable<E | undefined>;
  create?: (entity: Omit<E, 'id'>) => Observable<Id>;
  update?: (entity: {id: Id} & Partial<E>) => Observable<void>;
  remove?: (id: Id) => Observable<void>;
}
