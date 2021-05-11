import type { GraphQLResolveInfo } from 'graphql';
import type { Query } from './query';
export declare type QueryResolver<Q extends Query = Query> = (parent: any, args: {
    query: Q;
}, context: any, info: GraphQLResolveInfo) => Promise<any>;
