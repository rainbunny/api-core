import type { Observable } from 'rxjs';
import type { Entity, OffsetQuery, OffsetQueryResult, ReadRepository } from '@lib/interfaces';
import type { SchemaOf } from 'yup';
export declare const findOffsetQuery: <Id = string, E extends Entity<Id> = Entity<Id>, Q extends OffsetQuery = OffsetQuery>(params: {
    query: Q;
    defaultQuery?: Partial<Q>;
    repository: ReadRepository<Id, E>;
    querySchema: SchemaOf<unknown>;
    validatePermissions?: (query: Q) => Observable<void>;
}) => Observable<OffsetQueryResult<Id, E>>;
