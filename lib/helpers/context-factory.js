"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contextFactory = void 0;

var firebaseAdmin = _interopRequireWildcard(require("firebase-admin"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const convertTokenToAuthUser = token => token ? firebaseAdmin.auth().verifyIdToken(token).then(decodedIdToken => decodedIdToken.id ? {
  user: {
    id: decodedIdToken.id
  }
} : undefined).catch(() => ({
  user: undefined
})) : undefined;

const contextFactory = ({
  req
}) => convertTokenToAuthUser(req.headers.authorization);

exports.contextFactory = contextFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2NvbnRleHQtZmFjdG9yeS50cyJdLCJuYW1lcyI6WyJjb252ZXJ0VG9rZW5Ub0F1dGhVc2VyIiwidG9rZW4iLCJmaXJlYmFzZUFkbWluIiwiYXV0aCIsInZlcmlmeUlkVG9rZW4iLCJ0aGVuIiwiZGVjb2RlZElkVG9rZW4iLCJpZCIsInVzZXIiLCJ1bmRlZmluZWQiLCJjYXRjaCIsImNvbnRleHRGYWN0b3J5IiwicmVxIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7Ozs7O0FBRUEsTUFBTUEsc0JBQXNCLEdBQUlDLEtBQUQsSUFDN0JBLEtBQUssR0FDREMsYUFBYSxDQUNWQyxJQURILEdBRUdDLGFBRkgsQ0FFaUJILEtBRmpCLEVBR0dJLElBSEgsQ0FHU0MsY0FBRCxJQUNKQSxjQUFjLENBQUNDLEVBQWYsR0FDSTtBQUNFQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkQsSUFBQUEsRUFBRSxFQUFFRCxjQUFjLENBQUNDO0FBRGY7QUFEUixDQURKLEdBTUlFLFNBVlIsRUFZR0MsS0FaSCxDQVlTLE9BQU87QUFBQ0YsRUFBQUEsSUFBSSxFQUFFQztBQUFQLENBQVAsQ0FaVCxDQURDLEdBY0RBLFNBZk47O0FBaUJPLE1BQU1FLGNBQW9ELEdBQUcsQ0FBQztBQUFDQyxFQUFBQTtBQUFELENBQUQsS0FDbEVaLHNCQUFzQixDQUFDWSxHQUFHLENBQUNDLE9BQUosQ0FBWUMsYUFBYixDQURqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtBcG9sbG9TZXJ2ZXJFeHByZXNzQ29uZmlnfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IHR5cGUge0F1dGhVc2VyfSBmcm9tICdAbGliL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgKiBhcyBmaXJlYmFzZUFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcblxuY29uc3QgY29udmVydFRva2VuVG9BdXRoVXNlciA9ICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTx7dXNlcjogQXV0aFVzZXJ9PiA9PlxuICB0b2tlblxuICAgID8gZmlyZWJhc2VBZG1pblxuICAgICAgICAuYXV0aCgpXG4gICAgICAgIC52ZXJpZnlJZFRva2VuKHRva2VuKVxuICAgICAgICAudGhlbigoZGVjb2RlZElkVG9rZW4pID0+XG4gICAgICAgICAgZGVjb2RlZElkVG9rZW4uaWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBkZWNvZGVkSWRUb2tlbi5pZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goKCkgPT4gKHt1c2VyOiB1bmRlZmluZWR9KSlcbiAgICA6IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGNvbnRleHRGYWN0b3J5OiBBcG9sbG9TZXJ2ZXJFeHByZXNzQ29uZmlnWydjb250ZXh0J10gPSAoe3JlcX0pID0+XG4gIGNvbnZlcnRUb2tlblRvQXV0aFVzZXIocmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbik7XG4iXX0=