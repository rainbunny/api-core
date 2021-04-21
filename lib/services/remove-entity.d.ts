import type { Observable } from 'rxjs';
import type { Entity, WriteRepository } from '@lib/interfaces';
export declare const removeEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
    id: Id;
    repository: WriteRepository<Id, E>;
    validatePermission?: (entity: {
        id: Id;
    } & Partial<E>) => Observable<{
        id: Id;
    } & Partial<E>>;
    fields?: string[];
}) => Observable<void>;
