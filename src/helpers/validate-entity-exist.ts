import {ValidationError} from '../errors';

export const validateEntityExist = <T>(entity: T): T => {
  if (entity) {
    return entity;
  }
  throw new ValidationError(`Entity does not exist`);
};
