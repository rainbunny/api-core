import _ from 'lodash/fp';
import graphqlFields from 'graphql-fields';
import type {
  Command,
  CommandHandler,
  CommandResolver,
  Entity,
  Query,
  QueryHandler,
  QueryResolver,
  QueryResult,
} from '../interfaces';

interface HandlerParams {
  Query: {[entityName: string]: QueryHandler};
  Mutation: {[entityName: string]: {[commandName: string]: CommandHandler}};
}

interface HandlerResult {
  Query: {[entityName: string]: QueryResolver};
  Mutation: {[entityName: string]: () => {[commandName: string]: CommandResolver}};
  [key: string]: unknown;
}

const convertQueryHandlerToResolver = <
  Id = string,
  E extends Entity<Id> = Entity<Id>,
  Q extends Query = Query,
  Result extends QueryResult<Id, E> | E = QueryResult<Id, E> | E
>(
  queryHandler: QueryHandler<Id, E, Q, Result>,
): QueryResolver<Id, E, Q, Result> => (_parent, args, context, info) => {
  const fields = graphqlFields(info, {}, {processArguments: true});
  return queryHandler({...args.query, fields}, context).toPromise();
};

const mapQueryHandlerPairsToResolverPairs: (
  list: [string, QueryHandler][],
) => [string, QueryResolver][] = _.map((pair) => [pair[0], convertQueryHandlerToResolver(pair[1])]);

const mergeQueryResolverPairsToObject: (
  pairs: [string, QueryResolver][],
) => {[entityName: string]: QueryResolver} = _.reduce((acc, element) => ({...acc, [element[0]]: element[1]}), {});

const convertQueryHandlers: (queryHandlers: {
  [entityName: string]: QueryHandler;
}) => {[entityName: string]: QueryResolver} = _.pipe(
  _.toPairs,
  mapQueryHandlerPairsToResolverPairs,
  mergeQueryResolverPairsToObject,
);

const mergeCommandResolverPairsToObject: (
  pairs: [string, CommandResolver][],
) => {[entityName: string]: CommandResolver} = _.reduce((acc, element) => ({...acc, [element[0]]: element[1]}), {});

const convertCommandHandlerToResolver = <C extends Command>(commandHandler: CommandHandler<C>): CommandResolver<C> => (
  args,
  context,
  info,
) => {
  const fields = graphqlFields(info, {}, {processArguments: true});
  return commandHandler({...args.payload, fields}, context).toPromise();
};

const mapCommandHandlerPairsToResolverPairs: (
  list: [string, CommandHandler][],
) => [string, CommandResolver][] = _.map((pair) => [pair[0], convertCommandHandlerToResolver(pair[1])]);

const convertEntityCommandHandlersToEntityResolvers: (entityCommandHandlers: {
  [commandName: string]: CommandHandler;
}) => {[commandName: string]: CommandResolver} = _.pipe(
  _.toPairs,
  mapCommandHandlerPairsToResolverPairs,
  mergeCommandResolverPairsToObject,
);

const mapEntityCommandHandlerPairsToEntityResolverPairs: (
  list: [entityName: string, entityCommandHandlers: {[commandName: string]: CommandHandler}][],
) => [entityName: string, entityCommandResolvers: () => {[commandName: string]: CommandResolver}][] = _.map((pair) => [
  pair[0],
  () => convertEntityCommandHandlersToEntityResolvers(pair[1]),
]);

const mergeEntityCommandHandlersResolverPairsToObject: (
  pairs: [entityName: string, entityCommandResolvers: () => {[commandName: string]: CommandResolver}][],
) => {[entityName: string]: () => {[commandName: string]: CommandResolver}} = _.reduce(
  (acc, element) => ({...acc, [element[0]]: element[1]}),
  {},
);

const convertEntityCommandHandlers: (commandHandlers: {
  [entityName: string]: {[commandName: string]: CommandHandler};
}) => {[entityName: string]: () => {[commandName: string]: CommandResolver}} = _.pipe(
  _.toPairs,
  mapEntityCommandHandlerPairsToEntityResolverPairs,
  mergeEntityCommandHandlersResolverPairsToObject,
);

export const convertHandlersToResolvers = (handlers: HandlerParams): HandlerResult => ({
  Query: convertQueryHandlers(handlers.Query),
  Mutation: convertEntityCommandHandlers(handlers.Mutation),
});
