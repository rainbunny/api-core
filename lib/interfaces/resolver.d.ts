import { Query } from './query';
import { QueryResolver } from './query-resolver';
export interface Resolver {
    Query: {
        [entityName: string]: QueryResolver<Query> | unknown;
    };
    Mutation: {
        [entityName: string]: QueryResolver<Query> | unknown;
    };
    [key: string]: unknown;
}
