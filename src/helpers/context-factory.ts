import type {ApolloServerExpressConfig} from 'apollo-server-express';
import type {AuthUser} from '@lib/interfaces';

import * as firebaseAdmin from 'firebase-admin';

const convertTokenToAuthUser = (token: string): Promise<{user: AuthUser}> =>
  token
    ? firebaseAdmin
        .auth()
        .verifyIdToken(token)
        .then((decodedIdToken) =>
          decodedIdToken.id
            ? {
                user: {
                  id: decodedIdToken.id,
                },
              }
            : undefined,
        )
        .catch(() => ({user: undefined}))
    : undefined;

export const contextFactory: ApolloServerExpressConfig['context'] = ({req}) =>
  convertTokenToAuthUser(req.headers.authorization);
