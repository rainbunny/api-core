import type {SchemaOf} from 'yup';
import type {Entity, OffsetQuery, OffsetQueryResult, ReadRepository} from '../interfaces';
import {sanitizeOffsetQuery, validateSchema} from '../helpers';

const findInRepository =
  <Id = string, E extends Entity<Id> = Entity<Id>, Q extends OffsetQuery = OffsetQuery>(
    repository: ReadRepository<Id, E>,
  ) =>
  (query: Q): Promise<OffsetQueryResult<Id, E>> =>
    Promise.all([
      repository.find(query),
      query.fields?.pagination?.total ? repository.count(query) : Promise.resolve(0),
    ]).then(([data, total]) => ({
      data,
      pagination: {
        total,
        rowsPerPage: query.rowsPerPage,
        pageIndex: query.pageIndex,
      },
    }));

export const findOffsetQuery: <
  Id = string,
  E extends Entity<Id> = Entity<Id>,
  Q extends OffsetQuery = OffsetQuery,
>(params: {
  query: Q;
  defaultQuery?: Partial<Q>;
  repository: ReadRepository<Id, E>;
  querySchema: SchemaOf<unknown>;
  validatePermissions?: (query: Q) => Promise<void>;
}) => Promise<OffsetQueryResult<Id, E>> = ({query, repository, querySchema, validatePermissions}) =>
  Promise.resolve(query)
    .then(sanitizeOffsetQuery)
    .then(validateSchema(querySchema))
    .then((q) => (validatePermissions ? validatePermissions(q).then(() => q) : Promise.resolve(q)))
    .then(findInRepository(repository));
