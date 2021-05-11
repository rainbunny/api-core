/* eslint-disable @typescript-eslint/no-explicit-any */
import type {Observable} from 'rxjs';
import type {Context} from './context';
import type {Query} from './query';

export type QueryHandler<Q extends Query = Query> = (query: Q, context: Context) => Observable<any>;
