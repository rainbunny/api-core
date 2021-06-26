/* eslint-disable @typescript-eslint/no-explicit-any */
import type {Context} from './context';
import type {Query} from './query';

export type QueryHandler<Q extends Query = Query> = (query: Q, context: Context) => Promise<any>;
