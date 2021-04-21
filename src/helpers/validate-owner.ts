import type {AuthUser} from '@lib/interfaces';

import {ForbiddenError} from 'apollo-server';
import {validateAuthenticatedUser} from './validate-authenticated-user';

export const validateOwner = (user: AuthUser) => <T extends {createdBy?: string}>(entity: T): T => {
  validateAuthenticatedUser(user);
  if (entity.createdBy && user.id === entity.createdBy) {
    return entity;
  }
  throw new ForbiddenError('User must be the owner');
};