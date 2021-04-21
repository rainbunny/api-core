import type { Entity } from './entity';
export declare type QueryResult<Id = string, E extends Entity<Id> = Entity<Id>> = {
    data: E[];
};
export declare type OffsetQueryResult<Id = string, E extends Entity<Id> = Entity<Id>> = {
    data: E[];
    pagination: {
        total: number;
        pageIndex: number;
        rowsPerPage: number;
    };
};
export declare type CursorQueryResult<Id = string, E extends Entity<Id> = Entity<Id>> = {
    data: E[];
    pagination: {
        nextToken?: string;
    };
};
