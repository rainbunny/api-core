import type {AuthUser} from '@lib/interfaces';

import {AuthenticationError} from '@lib/errors';

export const validateAuthenticatedUser = (user: AuthUser) => <T>(entity?: T): T => {
  if (user) {
    return entity;
  }
  throw new AuthenticationError('User must be authenticated');
};
