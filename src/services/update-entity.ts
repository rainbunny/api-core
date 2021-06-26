import type {SchemaOf} from 'yup';
import type {AuthUser, Entity, Fields, WriteRepository} from '../interfaces';
import {validateSchema, validateEntityExist} from '../helpers';

export const updateEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  entity: {id: Id} & Partial<E>;
  repository: WriteRepository<Id, E>;
  schema?: SchemaOf<unknown>;
  validatePermissions?: (entity: {id: Id} & Partial<E>) => Promise<{id: Id} & Partial<E>>;
  user: AuthUser;
  fields?: Fields;
}) => Promise<void> = ({entity, repository, schema, validatePermissions, user, fields}) =>
  validateSchema<typeof entity>(schema)(entity)
    .then(({id}) => repository.getById({id, fields: fields || {id: {}, createdBy: {}}}))
    .then(validateEntityExist)
    .then((e) => (validatePermissions ? validatePermissions(e) : Promise.resolve(e)))
    .then(() => ({...entity, lastModifiedBy: user?.id}))
    .then(repository.update);
