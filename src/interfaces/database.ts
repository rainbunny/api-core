import type {RxExecutor, RxExtendedPoolClient} from '@tqt/pg-extensions';
import type {Observable} from 'rxjs';

export type Database = RxExecutor & {
  /** Execute transaction.
   * Follow https://node-postgres.com/features/transactions
   */
  executeTransaction: (transaction: (client: RxExtendedPoolClient) => Observable<void>) => Observable<void>;
};
