import type { Observable } from 'rxjs';
import type { SchemaOf } from 'yup';
import type { AuthUser, Entity, WriteRepository } from '@lib/interfaces';
export declare const updateEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
    entity: {
        id: Id;
    } & Partial<E>;
    repository: WriteRepository<Id, E>;
    schema?: SchemaOf<unknown>;
    validatePermission?: (entity: {
        id: Id;
    } & Partial<E>) => Observable<{
        id: Id;
    } & Partial<E>>;
    user: AuthUser;
    fields?: string[];
}) => Observable<void>;
