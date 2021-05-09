"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePermissions = void 0;

var _errors = require("../errors");

const validatePermissions = ({
  user,
  requiredRoles,
  requiredPermissions
}) => {
  if (requiredRoles && requiredRoles.length > 0) {
    requiredRoles.forEach(role => {
      var _user$roles;

      if (!(user !== null && user !== void 0 && (_user$roles = user.roles) !== null && _user$roles !== void 0 && _user$roles.includes(role))) {
        throw new _errors.ForbiddenError('Not authorized');
      }
    });
  }

  if (requiredPermissions && requiredPermissions.length > 0) {
    requiredPermissions.forEach(permission => {
      var _user$permissions;

      if (!(user !== null && user !== void 0 && (_user$permissions = user.permissions) !== null && _user$permissions !== void 0 && _user$permissions.includes(permission))) {
        throw new _errors.ForbiddenError('Not authorized');
      }
    });
  }
};

exports.validatePermissions = validatePermissions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3ZhbGlkYXRlLXBlcm1pc3Npb25zLnRzIl0sIm5hbWVzIjpbInZhbGlkYXRlUGVybWlzc2lvbnMiLCJ1c2VyIiwicmVxdWlyZWRSb2xlcyIsInJlcXVpcmVkUGVybWlzc2lvbnMiLCJsZW5ndGgiLCJmb3JFYWNoIiwicm9sZSIsInJvbGVzIiwiaW5jbHVkZXMiLCJGb3JiaWRkZW5FcnJvciIsInBlcm1pc3Npb24iLCJwZXJtaXNzaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUVPLE1BQU1BLG1CQUFtQixHQUFHLENBQUM7QUFDbENDLEVBQUFBLElBRGtDO0FBRWxDQyxFQUFBQSxhQUZrQztBQUdsQ0MsRUFBQUE7QUFIa0MsQ0FBRCxLQVF2QjtBQUNWLE1BQUlELGFBQWEsSUFBSUEsYUFBYSxDQUFDRSxNQUFkLEdBQXVCLENBQTVDLEVBQStDO0FBQzdDRixJQUFBQSxhQUFhLENBQUNHLE9BQWQsQ0FBdUJDLElBQUQsSUFBVTtBQUFBOztBQUM5QixVQUFJLEVBQUNMLElBQUQsYUFBQ0EsSUFBRCw4QkFBQ0EsSUFBSSxDQUFFTSxLQUFQLHdDQUFDLFlBQWFDLFFBQWIsQ0FBc0JGLElBQXRCLENBQUQsQ0FBSixFQUFrQztBQUNoQyxjQUFNLElBQUlHLHNCQUFKLENBQW1CLGdCQUFuQixDQUFOO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7O0FBRUQsTUFBSU4sbUJBQW1CLElBQUlBLG1CQUFtQixDQUFDQyxNQUFwQixHQUE2QixDQUF4RCxFQUEyRDtBQUN6REQsSUFBQUEsbUJBQW1CLENBQUNFLE9BQXBCLENBQTZCSyxVQUFELElBQWdCO0FBQUE7O0FBQzFDLFVBQUksRUFBQ1QsSUFBRCxhQUFDQSxJQUFELG9DQUFDQSxJQUFJLENBQUVVLFdBQVAsOENBQUMsa0JBQW1CSCxRQUFuQixDQUE0QkUsVUFBNUIsQ0FBRCxDQUFKLEVBQThDO0FBQzVDLGNBQU0sSUFBSUQsc0JBQUosQ0FBbUIsZ0JBQW5CLENBQU47QUFDRDtBQUNGLEtBSkQ7QUFLRDtBQUNGLENBeEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0F1dGhVc2VyfSBmcm9tICdAbGliL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQge0ZvcmJpZGRlbkVycm9yfSBmcm9tICdAbGliL2Vycm9ycyc7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVBlcm1pc3Npb25zID0gKHtcbiAgdXNlcixcbiAgcmVxdWlyZWRSb2xlcyxcbiAgcmVxdWlyZWRQZXJtaXNzaW9ucyxcbn06IHtcbiAgdXNlcjogQXV0aFVzZXI7XG4gIHJlcXVpcmVkUm9sZXM/OiBzdHJpbmdbXTtcbiAgcmVxdWlyZWRQZXJtaXNzaW9ucz86IHN0cmluZ1tdO1xufSk6IHZvaWQgPT4ge1xuICBpZiAocmVxdWlyZWRSb2xlcyAmJiByZXF1aXJlZFJvbGVzLmxlbmd0aCA+IDApIHtcbiAgICByZXF1aXJlZFJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICAgIGlmICghdXNlcj8ucm9sZXM/LmluY2x1ZGVzKHJvbGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBGb3JiaWRkZW5FcnJvcignTm90IGF1dGhvcml6ZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXF1aXJlZFBlcm1pc3Npb25zICYmIHJlcXVpcmVkUGVybWlzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgIHJlcXVpcmVkUGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgaWYgKCF1c2VyPy5wZXJtaXNzaW9ucz8uaW5jbHVkZXMocGVybWlzc2lvbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEZvcmJpZGRlbkVycm9yKCdOb3QgYXV0aG9yaXplZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuIl19