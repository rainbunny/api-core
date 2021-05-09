import {validatePermissions, ForbiddenError} from '@lib';

describe('validatePermissions', () => {
  it('runs successfully with required roles', () => {
    validatePermissions({
      user: {
        id: 'id',
        roles: ['admin'],
        permissions: [],
      },
      requiredRoles: ['admin'],
    });
    expect(true).toBe(true);
  });

  it('runs successfully with required permissions', () => {
    validatePermissions({
      user: {
        id: 'id',
        roles: [],
        permissions: ['createUser'],
      },
      requiredPermissions: ['createUser'],
    });
    expect(true).toBe(true);
  });

  it('throws error if missing required roles', () => {
    expect(() =>
      validatePermissions({
        user: {
          id: 'id',
          roles: [],
          permissions: [],
        },
        requiredRoles: ['admin'],
      }),
    ).toThrow(ForbiddenError);
  });

  it('throws error if missing required permissions', () => {
    expect(() =>
      validatePermissions({
        user: {
          id: 'id',
          roles: [],
          permissions: [],
        },
        requiredPermissions: ['createUser'],
      }),
    ).toThrow(ForbiddenError);
  });
});

export {};
