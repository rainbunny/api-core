import type { Observable } from 'rxjs';
import type { Entity, GetByIdQuery, ReadRepository, WriteRepository } from '../interfaces';
export declare const getEntityById: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
    query: GetByIdQuery<Id>;
    repository: ReadRepository<Id, E> | WriteRepository<Id, E>;
    validatePermissions?: (entity: E) => Observable<void>;
}) => Observable<E>;
