import type {Entity} from './entity';

export type QueryResult<Id = string, E extends Entity<Id> = Entity<Id>> = {
  data: E[];
};

export type OffsetQueryResult<Id = string, E extends Entity<Id> = Entity<Id>> = {
  data: E[];
  pagination: {
    total: number;
    pageIndex: number;
    rowsPerPage: number;
  };
};

export type CursorQueryResult<Id = string, E extends Entity<Id> = Entity<Id>> = {
  data: E[];
  pagination: {
    nextToken?: string;
  };
};
