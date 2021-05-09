import {GraphQLJSON} from 'graphql-type-json';
import type {Resolver} from '../interfaces';
import {config} from '../config';

export const baseResolvers = (): Resolver => ({
  JSON: GraphQLJSON,
  Query: {
    _: (): string => '',
    version: (): string => `${config().VERSION}.${config().BUILD}`,
    appName: (): string => config().APP_NAME,
  },
  Mutation: {
    _: (): string => '',
  },
});
