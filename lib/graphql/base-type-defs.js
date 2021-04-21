"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseTypeDefs = void 0;

var _apolloServer = require("apollo-server");

const baseTypeDefs = (0, _apolloServer.gql)`
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
exports.baseTypeDefs = baseTypeDefs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL2Jhc2UtdHlwZS1kZWZzLnRzIl0sIm5hbWVzIjpbImJhc2VUeXBlRGVmcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVPLE1BQU1BLFlBQVksR0FBRyxzQkFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQS9CTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tc2VydmVyJztcblxuZXhwb3J0IGNvbnN0IGJhc2VUeXBlRGVmcyA9IGdxbGBcbiAgc2NhbGFyIEpTT05cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBfOiBTdHJpbmdcbiAgICB2ZXJzaW9uOiBTdHJpbmdcbiAgICBhcHBOYW1lOiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIF86IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBPZmZzZXRQYWdpbmF0aW9uIHtcbiAgICB0b3RhbDogSW50IVxuICAgIHBhZ2VJbmRleDogSW50IVxuICAgIHJvd3NQZXJQYWdlOiBJbnQhXG4gIH1cblxuICB0eXBlIEN1cnNvclBhZ2luYXRpb24ge1xuICAgIG5leHRUb2tlbjogU3RyaW5nXG4gIH1cblxuICBlbnVtIFNvcnRPcmRlciB7XG4gICAgQVNDXG4gICAgREVTQ1xuICB9XG5cbiAgaW5wdXQgSWRJbnB1dCB7XG4gICAgaWQ6IFN0cmluZ1xuICB9XG5gO1xuIl19