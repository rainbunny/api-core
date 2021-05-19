import {of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import type {Observable} from 'rxjs';
import type {Entity, GetByIdQuery, ReadRepository, WriteRepository} from '../interfaces';
import {validateId} from '../helpers';

export const getEntityById: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  query: GetByIdQuery<Id>;
  repository: ReadRepository<Id, E> | WriteRepository<Id, E>;
  validatePermissions?: (entity: E) => Observable<void>;
}) => Observable<E> = ({query, repository, validatePermissions}) =>
  validateId<typeof query['id']>(query).pipe(
    switchMap(repository.getById),
    switchMap((entity) => (validatePermissions ? validatePermissions(entity).pipe(map(() => entity)) : of(entity))),
  );
