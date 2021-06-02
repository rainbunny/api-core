import type { RxExecutor, RxExtendedPoolClient } from '@thinhtran3588/pg-extensions';
import type { Observable } from 'rxjs';
export declare type Database = RxExecutor & {
    /** Execute transaction.
     * Follow https://node-postgres.com/features/transactions
     */
    executeTransaction: (transaction: (client: RxExtendedPoolClient) => Observable<void>) => Observable<void>;
};
