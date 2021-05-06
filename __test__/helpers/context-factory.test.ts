/* eslint-disable @typescript-eslint/no-explicit-any */
import {contextFactory} from '@lib';

describe('contextFactory', () => {
  it('returns context correctly', async () => {
    const user = {
      id: 'id',
      roles: ['admin'],
      permissions: ['createUser'],
    };
    const dependencies = {
      firebaseApp: {
        auth: () => ({
          verifyIdToken: async () => user,
        }),
      },
    };
    const context = await (contextFactory(dependencies as any) as any)({req: {headers: {authorization: 'token'}}});
    expect(context).toMatchInlineSnapshot(`
      Object {
        "user": Object {
          "id": "id",
          "permissions": Array [
            "createUser",
          ],
          "roles": Array [
            "admin",
          ],
        },
      }
    `);
  });

  it('returns context with no user', async () => {
    const dependencies = {
      firebaseApp: {
        auth: () => ({
          verifyIdToken: async () => ({}),
        }),
      },
    };
    const context = await (contextFactory(dependencies as any) as any)({req: {headers: {authorization: 'token'}}});
    expect(context).toMatchInlineSnapshot(`
      Object {
        "user": undefined,
      }
    `);
  });

  it('returns context with no user if decoding not successfully', async () => {
    const dependencies = {
      firebaseApp: {
        auth: () => ({
          verifyIdToken: async () => {
            throw new Error();
          },
        }),
      },
    };
    const context = await (contextFactory(dependencies as any) as any)({req: {headers: {authorization: 'token'}}});
    expect(context).toMatchInlineSnapshot(`
      Object {
        "user": undefined,
      }
    `);
  });

  it('returns context with no user if there is no token', async () => {
    const dependencies = {
      firebaseApp: {
        auth: () => ({
          verifyIdToken: async () => {
            throw new Error();
          },
        }),
      },
    };
    const context = await (contextFactory(dependencies as any) as any)({req: {headers: {authorization: ''}}});
    expect(context).toMatchInlineSnapshot(`
      Object {
        "user": undefined,
      }
    `);
  });
});

export {};
