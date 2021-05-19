import {of} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
import type {Observable} from 'rxjs';
import type {SchemaOf} from 'yup';
import type {Entity, WriteRepository} from '../interfaces';
import {validateSchema} from '../helpers';

export const createEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  entity: Omit<E, 'id'> & {id?: Id};
  repository: WriteRepository<Id, E>;
  schema: SchemaOf<unknown>;
  validatePermissions?: (entity: Omit<E, 'id'> & {id?: Id}) => Observable<void>;
}) => Observable<Id> = ({entity, repository, schema, validatePermissions}) =>
  validateSchema<typeof entity>(schema)(entity).pipe(
    switchMap((e) => (validatePermissions ? validatePermissions(e).pipe(map(() => e)) : of(e))),
    switchMap(repository.create),
  );
