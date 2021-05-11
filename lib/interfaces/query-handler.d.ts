import type { Observable } from 'rxjs';
import type { Context } from './context';
import type { Query } from './query';
export declare type QueryHandler<Q extends Query = Query> = (query: Q, context: Context) => Observable<any>;
