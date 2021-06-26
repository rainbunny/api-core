import type {SchemaOf} from 'yup';
import type {Entity, WriteRepository} from '../interfaces';
import {validateSchema} from '../helpers';

export const createEntity: <Id = string, E extends Entity<Id> = Entity<Id>>(params: {
  entity: Omit<E, 'id'> & {id?: Id};
  repository: WriteRepository<Id, E>;
  schema: SchemaOf<unknown>;
  validatePermissions?: (entity: Omit<E, 'id'> & {id?: Id}) => Promise<void>;
}) => Promise<Id> = ({entity, repository, schema, validatePermissions}) =>
  validateSchema<typeof entity>(schema)(entity)
    .then((e) => (validatePermissions ? validatePermissions(e) : undefined))
    .then(() => repository.create(entity));
