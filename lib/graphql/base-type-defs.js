"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseTypeDefs = void 0;

var _apolloServerCore = require("apollo-server-core");

const baseTypeDefs = (0, _apolloServerCore.gql)`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL2Jhc2UtdHlwZS1kZWZzLnRzIl0sIm5hbWVzIjpbImJhc2VUeXBlRGVmcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVPLE1BQU1BLFlBQVksR0FBRywwQkFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQS9CTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tc2VydmVyLWNvcmUnO1xuXG5leHBvcnQgY29uc3QgYmFzZVR5cGVEZWZzID0gZ3FsYFxuICBzY2FsYXIgSlNPTlxuXG4gIHR5cGUgUXVlcnkge1xuICAgIF86IFN0cmluZ1xuICAgIHZlcnNpb246IFN0cmluZ1xuICAgIGFwcE5hbWU6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgXzogU3RyaW5nXG4gIH1cblxuICB0eXBlIE9mZnNldFBhZ2luYXRpb24ge1xuICAgIHRvdGFsOiBJbnQhXG4gICAgcGFnZUluZGV4OiBJbnQhXG4gICAgcm93c1BlclBhZ2U6IEludCFcbiAgfVxuXG4gIHR5cGUgQ3Vyc29yUGFnaW5hdGlvbiB7XG4gICAgbmV4dFRva2VuOiBTdHJpbmdcbiAgfVxuXG4gIGVudW0gU29ydE9yZGVyIHtcbiAgICBBU0NcbiAgICBERVNDXG4gIH1cblxuICBpbnB1dCBJZElucHV0IHtcbiAgICBpZDogU3RyaW5nXG4gIH1cbmA7XG4iXX0=