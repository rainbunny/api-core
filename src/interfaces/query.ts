export type SortOrder = 'ASC' | 'DESC';

export type Query = {
  queryId?: string;
  queryType?: string;
  fields: string[];
  /** example: ['name|DESC', 'createdAt|ASC'] */
  sortBy?: string[];
};

export interface OffsetQuery extends Query {
  pageIndex?: number;
  itemsPerPage?: number;
}

export interface CursorQuery extends Query {
  nextToken?: string;
}

export interface GetByIdQuery<Id = string> {
  id: Id;
  fields: string[];
}
