import type {ApolloServerExpressConfig} from 'apollo-server-express';
import * as firebaseAdmin from 'firebase-admin';
import type {AuthUser} from '../interfaces';

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
