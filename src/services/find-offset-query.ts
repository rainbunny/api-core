import {of, zip} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import type {Observable} from 'rxjs';
import type {SchemaOf} from 'yup';
import type {Entity, OffsetQuery, OffsetQueryResult, ReadRepository} from '../interfaces';
import {sanitizeOffsetQuery, validateSchema} from '../helpers';

const findInRepository =
  <Id = string, E extends Entity<Id> = Entity<Id>, Q extends OffsetQuery = OffsetQuery>(
    repository: ReadRepository<Id, E>,
  ) =>
  (query: Q): Observable<OffsetQueryResult<Id, E>> =>
    zip(repository.find(query), query.fields?.pagination?.total ? repository.count(query) : of(0)).pipe(
      map(([data, total]) => ({
        data,
        pagination: {
          total,
          rowsPerPage: query.rowsPerPage,
          pageIndex: query.pageIndex,
        },
      })),
    );

export const findOffsetQuery: <
  Id = string,
  E extends Entity<Id> = Entity<Id>,
  Q extends OffsetQuery = OffsetQuery,
>(params: {
  query: Q;
  defaultQuery?: Partial<Q>;
  repository: ReadRepository<Id, E>;
  querySchema: SchemaOf<unknown>;
  validatePermissions?: (query: Q) => Observable<void>;
}) => Observable<OffsetQueryResult<Id, E>> = ({query, repository, querySchema, validatePermissions}) =>
  of(query).pipe(
    map(sanitizeOffsetQuery),
    switchMap(validateSchema(querySchema)),
    switchMap((q) => (validatePermissions ? validatePermissions(q).pipe(map(() => q)) : of(q))),
    switchMap(findInRepository(repository)),
  );
