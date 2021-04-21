import type {Observable} from 'rxjs';
import type {Entity, GetByIdQuery, ReadRepository, WriteRepository} from '@lib/interfaces';

import {switchMap} from 'rxjs/operators';
import {validateId} from '@lib/helpers';

export const getEntityById: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  query: GetByIdQuery<Id>;
  repository: ReadRepository<Id, E> | WriteRepository<Id, E>;
}) => Observable<E> = ({query, repository}) =>
  validateId<typeof query['id']>(query).pipe(switchMap(repository.getById));
