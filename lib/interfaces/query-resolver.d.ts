import type { GraphQLResolveInfo } from 'graphql';
import type { Entity } from './entity';
import type { Query } from './query';
import type { QueryResult } from './query-result';
export declare type QueryResolver<Id = string, E extends Entity<Id> = Entity<Id>, Q extends Query = Query, R extends QueryResult<E> | E = QueryResult<E> | E> = (parent: any, args: {
    query: Q;
}, context: any, info: GraphQLResolveInfo) => Promise<R>;
