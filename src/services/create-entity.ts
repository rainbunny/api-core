import type {Observable} from 'rxjs';
import type {Entity, WriteRepository} from '@lib/interfaces';
import type {SchemaOf} from 'yup';

import {switchMap} from 'rxjs/operators';
import {validateSchema} from '@lib/helpers';

export const createEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  entity: Omit<E, 'id'>;
  repository: WriteRepository<Id, E>;
  schema: SchemaOf<unknown>;
}) => Observable<Id> = ({entity, repository, schema}) =>
  validateSchema<typeof entity>(schema)(entity).pipe(switchMap(repository.create));
