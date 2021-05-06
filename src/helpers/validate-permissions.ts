import type {AuthUser} from '@lib/interfaces';

import {ForbiddenError} from 'apollo-server';

export const validatePermissions = ({
  user,
  requiredRoles,
  requiredPermissions,
}: {
  user: AuthUser;
  requiredRoles?: string[];
  requiredPermissions?: string[];
}): void => {
  if (requiredRoles && requiredRoles.length > 0) {
    requiredRoles.forEach((role) => {
      if (!user?.roles?.includes(role)) {
        throw new ForbiddenError('Not authorized');
      }
    });
  }

  if (requiredPermissions && requiredPermissions.length > 0) {
    requiredPermissions.forEach((permission) => {
      if (!user?.permissions?.includes(permission)) {
        throw new ForbiddenError('Not authorized');
      }
    });
  }
};
