import type {ApolloServerExpressConfig} from 'apollo-server-express';
import type {AuthUser} from '@lib/interfaces';

import * as firebaseAdmin from 'firebase-admin';

export const contextFactory: (deps: {firebaseApp: firebaseAdmin.app.App}) => ApolloServerExpressConfig['context'] = ({
  firebaseApp,
}) => ({req}): Promise<{user: AuthUser}> =>
  firebaseApp
    .auth()
    .verifyIdToken(req.headers.authorization || '')
    .then((decodedIdToken) =>
      decodedIdToken.id
        ? {
            user: {
              id: decodedIdToken.id,
              roles: decodedIdToken.roles,
              permissions: decodedIdToken.permissions,
            } as AuthUser,
          }
        : {user: undefined},
    )
    .catch(() => ({user: undefined}));
