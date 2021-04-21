import type { Observable } from 'rxjs';
import type { Entity, GetByIdQuery, ReadRepository, WriteRepository } from '@lib/interfaces';
export declare const getEntityById: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
    query: GetByIdQuery<Id>;
    repository: ReadRepository<Id, E> | WriteRepository<Id, E>;
}) => Observable<E>;
