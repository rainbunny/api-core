import type {Observable} from 'rxjs';
import {of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import type {Entity, Fields, WriteRepository} from '../interfaces';
import {validateEntityExist} from '../helpers';

export const removeEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  id: Id;
  repository: WriteRepository<Id, E>;
  fields?: Fields;
  validatePermissions?: (entity: {id: Id} & Partial<E>) => Observable<{id: Id} & Partial<E>>;
}) => Observable<void> = ({id, repository, validatePermissions, fields}) =>
  repository.getById({id, fields: fields || {id: {}, createdBy: {}}}).pipe(
    map(validateEntityExist),
    switchMap((entity) => (validatePermissions ? validatePermissions(entity) : of(entity))),
    switchMap((entity) => repository.remove(entity.id)),
  );
