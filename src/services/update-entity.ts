import type {Observable} from 'rxjs';
import type {SchemaOf} from 'yup';
import type {AuthUser, Entity, Fields, WriteRepository} from '@lib/interfaces';

import {of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {validateSchema, validateEntityExist} from '@lib/helpers';

export const updateEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  entity: {id: Id} & Partial<E>;
  repository: WriteRepository<Id, E>;
  schema?: SchemaOf<unknown>;
  validatePermission?: (entity: {id: Id} & Partial<E>) => Observable<{id: Id} & Partial<E>>;
  user: AuthUser;
  fields?: Fields;
}) => Observable<void> = ({entity, repository, schema, validatePermission, user, fields}) =>
  validateSchema<typeof entity>(schema)(entity).pipe(
    switchMap(({id}) => repository.getById({id, fields: fields || {id: {}, createdBy: {}}})),
    map(validateEntityExist),
    switchMap((e) => (validatePermission ? validatePermission(e) : of(e))),
    map(() => ({...entity, lastModifiedBy: user?.id})),
    switchMap(repository.update),
  );
