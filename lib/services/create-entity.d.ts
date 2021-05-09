import type { Observable } from 'rxjs';
import type { SchemaOf } from 'yup';
import type { Entity, WriteRepository } from '../interfaces';
export declare const createEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
    entity: Omit<E, 'id'> & {
        id?: Id;
    };
    repository: WriteRepository<Id, E>;
    schema: SchemaOf<unknown>;
    validatePermissions?: (entity: Omit<E, 'id'> & {
        id?: Id;
    }) => Observable<void>;
}) => Observable<Id>;
