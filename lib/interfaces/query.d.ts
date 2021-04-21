export declare type SortOrder = 'ASC' | 'DESC';
export declare type Query = {
    queryId: string;
    commandType: string;
    fields: string[];
};
export interface OffsetQuery extends Query {
    pageIndex?: number;
    rowsPerPage?: number;
    /** example: ['name|DESC', 'createdAt|ASC'] */
    sortBy?: string[];
}
export interface CursorQuery extends Query {
    nextToken?: string;
}
export interface GetByIdQuery<Id = string> {
    id: Id;
    fields: string[];
}
