import {Fields} from './fields';

export type SortOrder = 'ASC' | 'DESC';

export type Query = {
  queryId?: string;
  queryType?: string;
  fields?: Fields;
  /** example: ['name|DESC', 'createdAt|ASC'] */
  sortBy?: string[];
};

export interface OffsetQuery extends Query {
  pageIndex?: number;
  rowsPerPage?: number;
}

export interface CursorQuery extends Query {
  nextToken?: string;
}

export interface GetByIdQuery<Id = string> {
  id: Id;
  fields?: Fields;
}
