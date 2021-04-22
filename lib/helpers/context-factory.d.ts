import type { ApolloServerExpressConfig } from 'apollo-server-express';
import * as firebaseAdmin from 'firebase-admin';
export declare const contextFactory: (deps: {
    firebaseApp: firebaseAdmin.app.App;
}) => ApolloServerExpressConfig['context'];
