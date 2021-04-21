import type {Observable} from 'rxjs';
import type {Entity, OffsetQuery, OffsetQueryResult, ReadRepository} from '@lib/interfaces';
import type {SchemaOf} from 'yup';

import {of, zip} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {sanitizeOffsetQuery, validateSchema} from '@lib/helpers';

const findInRepository = <Id = string, E extends Entity<Id> = Entity<Id>, Q extends OffsetQuery = OffsetQuery>(
  repository: ReadRepository<Id, E>,
) => (query: Q): Observable<OffsetQueryResult<Id, E>> =>
  zip(repository.find(query), repository.count(query)).pipe(
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
  Q extends OffsetQuery = OffsetQuery
>(params: {
  query: Q;
  defaultQuery?: Partial<Q>;
  repository: ReadRepository<Id, E>;
  querySchema: SchemaOf<unknown>;
}) => Observable<OffsetQueryResult<Id, E>> = ({query, repository, querySchema}) =>
  of(query).pipe(
    map(sanitizeOffsetQuery),
    switchMap(validateSchema(querySchema)),
    switchMap(findInRepository(repository)),
  );
