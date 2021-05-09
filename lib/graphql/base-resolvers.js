"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseResolvers = void 0;

var _graphqlTypeJson = require("graphql-type-json");

var _config = require("../config");

const baseResolvers = () => ({
  JSON: _graphqlTypeJson.GraphQLJSON,
  Query: {
    _: () => '',
    version: () => `${(0, _config.config)().VERSION}.${(0, _config.config)().BUILD}`,
    appName: () => (0, _config.config)().APP_NAME
  },
  Mutation: {
    _: () => ''
  }
});

exports.baseResolvers = baseResolvers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL2Jhc2UtcmVzb2x2ZXJzLnRzIl0sIm5hbWVzIjpbImJhc2VSZXNvbHZlcnMiLCJKU09OIiwiR3JhcGhRTEpTT04iLCJRdWVyeSIsIl8iLCJ2ZXJzaW9uIiwiVkVSU0lPTiIsIkJVSUxEIiwiYXBwTmFtZSIsIkFQUF9OQU1FIiwiTXV0YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFTyxNQUFNQSxhQUFhLEdBQUcsT0FBaUI7QUFDNUNDLEVBQUFBLElBQUksRUFBRUMsNEJBRHNDO0FBRTVDQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsQ0FBQyxFQUFFLE1BQWMsRUFEWjtBQUVMQyxJQUFBQSxPQUFPLEVBQUUsTUFBZSxHQUFFLHNCQUFTQyxPQUFRLElBQUcsc0JBQVNDLEtBQU0sRUFGeEQ7QUFHTEMsSUFBQUEsT0FBTyxFQUFFLE1BQWMsc0JBQVNDO0FBSDNCLEdBRnFDO0FBTzVDQyxFQUFBQSxRQUFRLEVBQUU7QUFDUk4sSUFBQUEsQ0FBQyxFQUFFLE1BQWM7QUFEVDtBQVBrQyxDQUFqQixDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R3JhcGhRTEpTT059IGZyb20gJ2dyYXBocWwtdHlwZS1qc29uJztcbmltcG9ydCB0eXBlIHtSZXNvbHZlcn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGJhc2VSZXNvbHZlcnMgPSAoKTogUmVzb2x2ZXIgPT4gKHtcbiAgSlNPTjogR3JhcGhRTEpTT04sXG4gIFF1ZXJ5OiB7XG4gICAgXzogKCk6IHN0cmluZyA9PiAnJyxcbiAgICB2ZXJzaW9uOiAoKTogc3RyaW5nID0+IGAke2NvbmZpZygpLlZFUlNJT059LiR7Y29uZmlnKCkuQlVJTER9YCxcbiAgICBhcHBOYW1lOiAoKTogc3RyaW5nID0+IGNvbmZpZygpLkFQUF9OQU1FLFxuICB9LFxuICBNdXRhdGlvbjoge1xuICAgIF86ICgpOiBzdHJpbmcgPT4gJycsXG4gIH0sXG59KTtcbiJdfQ==