import type { SchemaOf } from 'yup';
import type { AuthUser, Entity, Fields, WriteRepository } from '../interfaces';
export declare const updateEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
    entity: {
        id: Id;
    } & Partial<E>;
    repository: WriteRepository<Id, E>;
    schema?: SchemaOf<unknown>;
    validatePermissions?: (entity: {
        id: Id;
    } & Partial<E>) => Promise<{
        id: Id;
    } & Partial<E>>;
    user: AuthUser;
    fields?: Fields;
}) => Promise<void>;
