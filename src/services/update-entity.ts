import type {Observable} from 'rxjs';
import type {SchemaOf} from 'yup';
import {of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import type {AuthUser, Entity, Fields, WriteRepository} from '../interfaces';
import {validateSchema, validateEntityExist} from '../helpers';

export const updateEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  entity: {id: Id} & Partial<E>;
  repository: WriteRepository<Id, E>;
  schema?: SchemaOf<unknown>;
  validatePermissions?: (entity: {id: Id} & Partial<E>) => Observable<{id: Id} & Partial<E>>;
  user: AuthUser;
  fields?: Fields;
}) => Observable<void> = ({entity, repository, schema, validatePermissions, user, fields}) =>
  validateSchema<typeof entity>(schema)(entity).pipe(
    switchMap(({id}) => repository.getById({id, fields: fields || {id: {}, createdBy: {}}})),
    map(validateEntityExist),
    switchMap((e) => (validatePermissions ? validatePermissions(e) : of(e))),
    map(() => ({...entity, lastModifiedBy: user?.id})),
    switchMap(repository.update),
  );
