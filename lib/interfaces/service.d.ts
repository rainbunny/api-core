import type { Command } from './command';
import type { Context } from './context';
import type { Entity } from './entity';
import type { GetByIdQuery, Query } from './query';
import type { OffsetQueryResult, CursorQueryResult } from './query-result';
export interface Service<Id = string, E extends Entity<Id> = Entity<Id>, QueryResult extends OffsetQueryResult<Id, E> | CursorQueryResult<Id, E> = OffsetQueryResult<Id, E> | CursorQueryResult<Id, E>> {
    find?: (query: Query, context: Context) => Promise<QueryResult>;
    getById?: (query: GetByIdQuery, context: Context) => Promise<E | undefined>;
    create?: (command: Command, context: Context) => Promise<string>;
    update?: (command: Command, context: Context) => Promise<void>;
    remove?: (command: Command, context: Context) => Promise<void>;
}
