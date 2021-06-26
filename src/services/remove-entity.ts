import type {Entity, Fields, WriteRepository} from '../interfaces';
import {validateEntityExist} from '../helpers';

export const removeEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  id: Id;
  repository: WriteRepository<Id, E>;
  fields?: Fields;
  validatePermissions?: (entity: {id: Id} & Partial<E>) => Promise<{id: Id} & Partial<E>>;
}) => Promise<void> = ({id, repository, validatePermissions, fields}) =>
  repository
    .getById({id, fields: fields || {id: {}, createdBy: {}}})
    .then(validateEntityExist)
    .then((entity) => (validatePermissions ? validatePermissions(entity) : Promise.resolve(entity)))
    .then((entity) => repository.remove(entity.id));
