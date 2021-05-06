import type {Observable} from 'rxjs';
import type {Entity, WriteRepository} from '@lib/interfaces';
import type {SchemaOf} from 'yup';

import {of} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
import {validateSchema} from '@lib/helpers';

export const createEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  entity: Omit<E, 'id'> & {id?: Id};
  repository: WriteRepository<Id, E>;
  schema: SchemaOf<unknown>;
  validatePermission?: (entity: Omit<E, 'id'> & {id?: Id}) => Observable<void>;
}) => Observable<Id> = ({entity, repository, schema, validatePermission}) =>
  validateSchema<typeof entity>(schema)(entity).pipe(
    switchMap((e) => (validatePermission ? validatePermission(e).pipe(map(() => e)) : of(e))),
    switchMap(repository.create),
  );
