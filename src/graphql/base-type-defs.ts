import {gql} from 'apollo-server';

export const baseTypeDefs = gql`
  scalar JSON

  type Query {
    _: String
    version: String
    appName: String
  }

  type Mutation {
    _: String
  }

  type OffsetPagination {
    total: Int!
    pageIndex: Int!
    rowsPerPage: Int!
  }

  type CursorPagination {
    nextToken: String
  }

  enum SortOrder {
    ASC
    DESC
  }

  input IdInput {
    id: String
  }
`;
