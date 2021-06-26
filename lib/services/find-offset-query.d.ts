import type { SchemaOf } from 'yup';
import type { Entity, OffsetQuery, OffsetQueryResult, ReadRepository } from '../interfaces';
export declare const findOffsetQuery: <Id = string, E extends Entity<Id> = Entity<Id>, Q extends OffsetQuery = OffsetQuery>(params: {
    query: Q;
    defaultQuery?: Partial<Q>;
    repository: ReadRepository<Id, E>;
    querySchema: SchemaOf<unknown>;
    validatePermissions?: (query: Q) => Promise<void>;
}) => Promise<OffsetQueryResult<Id, E>>;
