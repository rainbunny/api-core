import type { Observable } from 'rxjs';
import type { Entity } from './entity';
import type { GetByIdQuery, Query } from './query';
export interface ReadRepository<Id = string, E extends Entity<Id> = Entity<Id>, Q extends Query = Query> {
    find?: (query: Q) => Observable<E[]>;
    count?: (query: Q) => Observable<number>;
    getById?: (query: GetByIdQuery<Id>) => Observable<E | undefined>;
}
