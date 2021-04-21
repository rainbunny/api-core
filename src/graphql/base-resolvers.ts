import type {Resolver} from '@lib/interfaces';

import {GraphQLJSON} from 'graphql-type-json';
import {config} from '@lib/config';

export const baseResolvers = (): Resolver => ({
  JSON: GraphQLJSON,
  Query: {
    _: (): string => '',
    version: (): string => `${config.VERSION}.${config.BUILD}`,
    appName: (): string => config.APP_NAME,
  },
  Mutation: {
    _: (): string => '',
  },
});
