"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEntityExist = void 0;

var _errors = require("../errors");

const validateEntityExist = entity => {
  if (entity) {
    return entity;
  }

  throw new _errors.ValidationError(`Entity does not exist`);
};

exports.validateEntityExist = validateEntityExist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3ZhbGlkYXRlLWVudGl0eS1leGlzdC50cyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUVudGl0eUV4aXN0IiwiZW50aXR5IiwiVmFsaWRhdGlvbkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sTUFBTUEsbUJBQW1CLEdBQU9DLE1BQUosSUFBcUI7QUFDdEQsTUFBSUEsTUFBSixFQUFZO0FBQ1YsV0FBT0EsTUFBUDtBQUNEOztBQUNELFFBQU0sSUFBSUMsdUJBQUosQ0FBcUIsdUJBQXJCLENBQU47QUFDRCxDQUxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWYWxpZGF0aW9uRXJyb3J9IGZyb20gJy4uL2Vycm9ycyc7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUVudGl0eUV4aXN0ID0gPFQ+KGVudGl0eTogVCk6IFQgPT4ge1xuICBpZiAoZW50aXR5KSB7XG4gICAgcmV0dXJuIGVudGl0eTtcbiAgfVxuICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKGBFbnRpdHkgZG9lcyBub3QgZXhpc3RgKTtcbn07XG4iXX0=