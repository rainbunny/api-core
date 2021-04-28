import type {AuthUser} from '@lib/interfaces';

import {ForbiddenError} from 'apollo-server';

export const validateAuthenticatedUser = (user: AuthUser) => <T>(entity?: T): T => {
  if (user) {
    return entity;
  }
  throw new ForbiddenError('User must be authenticated');
};
