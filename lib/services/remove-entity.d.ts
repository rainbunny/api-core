import type { Observable } from 'rxjs';
import type { Entity, Fields, WriteRepository } from '../interfaces';
export declare const removeEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
    id: Id;
    repository: WriteRepository<Id, E>;
    fields?: Fields;
    validatePermissions?: (entity: {
        id: Id;
    } & Partial<E>) => Observable<{
        id: Id;
    } & Partial<E>>;
}) => Observable<void>;
