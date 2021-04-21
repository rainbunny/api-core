import {UserInputError} from 'apollo-server';

export const validateEntityExist = <T>(entity: T): T => {
  if (entity) {
    return entity;
  }
  throw new UserInputError(`Entity does not exist`);
};
