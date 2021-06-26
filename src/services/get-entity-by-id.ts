import type {Entity, GetByIdQuery, ReadRepository, WriteRepository} from '../interfaces';
import {validateId} from '../helpers';

export const getEntityById: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  query: GetByIdQuery<Id>;
  repository: ReadRepository<Id, E> | WriteRepository<Id, E>;
  validatePermissions?: (entity: E) => Promise<void>;
}) => Promise<E> = ({query, repository, validatePermissions}) =>
  validateId<typeof query['id']>(query)
    .then(repository.getById)
    .then((entity) => (validatePermissions ? validatePermissions(entity).then(() => entity) : Promise.resolve(entity)));
