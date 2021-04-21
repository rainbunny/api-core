import {Entity} from './entity';
import {Query} from './query';
import {QueryResolver} from './query-resolver';

export interface Resolver<Id = string> {
  Query: {[entityName: string]: QueryResolver<Id, Entity<Id>, Query> | unknown};
  Mutation: {[entityName: string]: QueryResolver<Id, Entity<Id>, Query> | unknown};
  [key: string]: unknown;
}
