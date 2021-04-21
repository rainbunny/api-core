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
    version: () => `${_config.config.VERSION}.${_config.config.BUILD}`,
    appName: () => _config.config.APP_NAME
  },
  Mutation: {
    _: () => ''
  }
});

exports.baseResolvers = baseResolvers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL2Jhc2UtcmVzb2x2ZXJzLnRzIl0sIm5hbWVzIjpbImJhc2VSZXNvbHZlcnMiLCJKU09OIiwiR3JhcGhRTEpTT04iLCJRdWVyeSIsIl8iLCJ2ZXJzaW9uIiwiY29uZmlnIiwiVkVSU0lPTiIsIkJVSUxEIiwiYXBwTmFtZSIsIkFQUF9OQU1FIiwiTXV0YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFTyxNQUFNQSxhQUFhLEdBQUcsT0FBaUI7QUFDNUNDLEVBQUFBLElBQUksRUFBRUMsNEJBRHNDO0FBRTVDQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsQ0FBQyxFQUFFLE1BQWMsRUFEWjtBQUVMQyxJQUFBQSxPQUFPLEVBQUUsTUFBZSxHQUFFQyxlQUFPQyxPQUFRLElBQUdELGVBQU9FLEtBQU0sRUFGcEQ7QUFHTEMsSUFBQUEsT0FBTyxFQUFFLE1BQWNILGVBQU9JO0FBSHpCLEdBRnFDO0FBTzVDQyxFQUFBQSxRQUFRLEVBQUU7QUFDUlAsSUFBQUEsQ0FBQyxFQUFFLE1BQWM7QUFEVDtBQVBrQyxDQUFqQixDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtSZXNvbHZlcn0gZnJvbSAnQGxpYi9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHtHcmFwaFFMSlNPTn0gZnJvbSAnZ3JhcGhxbC10eXBlLWpzb24nO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJ0BsaWIvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGJhc2VSZXNvbHZlcnMgPSAoKTogUmVzb2x2ZXIgPT4gKHtcbiAgSlNPTjogR3JhcGhRTEpTT04sXG4gIFF1ZXJ5OiB7XG4gICAgXzogKCk6IHN0cmluZyA9PiAnJyxcbiAgICB2ZXJzaW9uOiAoKTogc3RyaW5nID0+IGAke2NvbmZpZy5WRVJTSU9OfS4ke2NvbmZpZy5CVUlMRH1gLFxuICAgIGFwcE5hbWU6ICgpOiBzdHJpbmcgPT4gY29uZmlnLkFQUF9OQU1FLFxuICB9LFxuICBNdXRhdGlvbjoge1xuICAgIF86ICgpOiBzdHJpbmcgPT4gJycsXG4gIH0sXG59KTtcbiJdfQ==