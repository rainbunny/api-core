"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePermissions = void 0;

var _apolloServer = require("apollo-server");

const validatePermissions = ({
  user,
  requiredRoles,
  requiredPermissions
}) => {
  if (requiredRoles && requiredRoles.length > 0) {
    requiredRoles.forEach(role => {
      var _user$roles;

      if (!(user !== null && user !== void 0 && (_user$roles = user.roles) !== null && _user$roles !== void 0 && _user$roles.includes(role))) {
        throw new _apolloServer.ForbiddenError('Not authorized');
      }
    });
  }

  if (requiredPermissions && requiredPermissions.length > 0) {
    requiredPermissions.forEach(permission => {
      var _user$permissions;

      if (!(user !== null && user !== void 0 && (_user$permissions = user.permissions) !== null && _user$permissions !== void 0 && _user$permissions.includes(permission))) {
        throw new _apolloServer.ForbiddenError('Not authorized');
      }
    });
  }
};

exports.validatePermissions = validatePermissions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3ZhbGlkYXRlLXBlcm1pc3Npb25zLnRzIl0sIm5hbWVzIjpbInZhbGlkYXRlUGVybWlzc2lvbnMiLCJ1c2VyIiwicmVxdWlyZWRSb2xlcyIsInJlcXVpcmVkUGVybWlzc2lvbnMiLCJsZW5ndGgiLCJmb3JFYWNoIiwicm9sZSIsInJvbGVzIiwiaW5jbHVkZXMiLCJGb3JiaWRkZW5FcnJvciIsInBlcm1pc3Npb24iLCJwZXJtaXNzaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUVPLE1BQU1BLG1CQUFtQixHQUFHLENBQUM7QUFDbENDLEVBQUFBLElBRGtDO0FBRWxDQyxFQUFBQSxhQUZrQztBQUdsQ0MsRUFBQUE7QUFIa0MsQ0FBRCxLQVF2QjtBQUNWLE1BQUlELGFBQWEsSUFBSUEsYUFBYSxDQUFDRSxNQUFkLEdBQXVCLENBQTVDLEVBQStDO0FBQzdDRixJQUFBQSxhQUFhLENBQUNHLE9BQWQsQ0FBdUJDLElBQUQsSUFBVTtBQUFBOztBQUM5QixVQUFJLEVBQUNMLElBQUQsYUFBQ0EsSUFBRCw4QkFBQ0EsSUFBSSxDQUFFTSxLQUFQLHdDQUFDLFlBQWFDLFFBQWIsQ0FBc0JGLElBQXRCLENBQUQsQ0FBSixFQUFrQztBQUNoQyxjQUFNLElBQUlHLDRCQUFKLENBQW1CLGdCQUFuQixDQUFOO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7O0FBRUQsTUFBSU4sbUJBQW1CLElBQUlBLG1CQUFtQixDQUFDQyxNQUFwQixHQUE2QixDQUF4RCxFQUEyRDtBQUN6REQsSUFBQUEsbUJBQW1CLENBQUNFLE9BQXBCLENBQTZCSyxVQUFELElBQWdCO0FBQUE7O0FBQzFDLFVBQUksRUFBQ1QsSUFBRCxhQUFDQSxJQUFELG9DQUFDQSxJQUFJLENBQUVVLFdBQVAsOENBQUMsa0JBQW1CSCxRQUFuQixDQUE0QkUsVUFBNUIsQ0FBRCxDQUFKLEVBQThDO0FBQzVDLGNBQU0sSUFBSUQsNEJBQUosQ0FBbUIsZ0JBQW5CLENBQU47QUFDRDtBQUNGLEtBSkQ7QUFLRDtBQUNGLENBeEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0F1dGhVc2VyfSBmcm9tICdAbGliL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQge0ZvcmJpZGRlbkVycm9yfSBmcm9tICdhcG9sbG8tc2VydmVyJztcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUGVybWlzc2lvbnMgPSAoe1xuICB1c2VyLFxuICByZXF1aXJlZFJvbGVzLFxuICByZXF1aXJlZFBlcm1pc3Npb25zLFxufToge1xuICB1c2VyOiBBdXRoVXNlcjtcbiAgcmVxdWlyZWRSb2xlcz86IHN0cmluZ1tdO1xuICByZXF1aXJlZFBlcm1pc3Npb25zPzogc3RyaW5nW107XG59KTogdm9pZCA9PiB7XG4gIGlmIChyZXF1aXJlZFJvbGVzICYmIHJlcXVpcmVkUm9sZXMubGVuZ3RoID4gMCkge1xuICAgIHJlcXVpcmVkUm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgICAgaWYgKCF1c2VyPy5yb2xlcz8uaW5jbHVkZXMocm9sZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEZvcmJpZGRlbkVycm9yKCdOb3QgYXV0aG9yaXplZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlcXVpcmVkUGVybWlzc2lvbnMgJiYgcmVxdWlyZWRQZXJtaXNzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgcmVxdWlyZWRQZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtaXNzaW9uKSA9PiB7XG4gICAgICBpZiAoIXVzZXI/LnBlcm1pc3Npb25zPy5pbmNsdWRlcyhwZXJtaXNzaW9uKSkge1xuICAgICAgICB0aHJvdyBuZXcgRm9yYmlkZGVuRXJyb3IoJ05vdCBhdXRob3JpemVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG4iXX0=