import type {AuthUser} from '@lib/interfaces';

import {AuthenticationError} from 'apollo-server';

export const validateAuthenticatedUser = (user: AuthUser): void => {
  if (user) {
    return;
  }
  throw new AuthenticationError('User must be authenticated');
};
