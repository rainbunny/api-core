import type {AuthUser} from '../interfaces';
import {AuthenticationError} from '../errors';

export const validateAuthenticatedUser =
  (user: AuthUser) =>
  <T>(entity?: T): T => {
    if (user) {
      return entity;
    }
    throw new AuthenticationError('User must be authenticated');
  };
