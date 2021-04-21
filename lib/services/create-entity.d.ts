import type { Observable } from 'rxjs';
import type { Entity, WriteRepository } from '@lib/interfaces';
import type { SchemaOf } from 'yup';
export declare const createEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
    entity: Omit<E, 'id'>;
    repository: WriteRepository<Id, E>;
    schema: SchemaOf<unknown>;
}) => Observable<Id>;
