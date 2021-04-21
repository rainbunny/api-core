import type {Observable} from 'rxjs';
import type {Entity, WriteRepository} from '@lib/interfaces';

import {of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {validateEntityExist} from '@lib/helpers';

export const removeEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  id: Id;
  repository: WriteRepository<Id, E>;
  validatePermission?: (entity: {id: Id} & Partial<E>) => Observable<{id: Id} & Partial<E>>;
  fields?: string[];
}) => Observable<void> = ({id, repository, validatePermission, fields}) =>
  repository.getById({id, fields: fields || ['id', 'createdBy']}).pipe(
    map(validateEntityExist),
    switchMap((entity) => (validatePermission ? validatePermission(entity) : of(entity))),
    map(() => id),
    switchMap(repository.remove),
  );
