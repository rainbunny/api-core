"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateId = void 0;

var yup = _interopRequireWildcard(require("yup"));

var _validateSchema = require("./validate-schema");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const schema = yup.object().shape({
  id: yup.string().required().uuid()
});
const validateId = (0, _validateSchema.validateSchema)(schema);
exports.validateId = validateId;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3ZhbGlkYXRlLWlkLnRzIl0sIm5hbWVzIjpbInNjaGVtYSIsInl1cCIsIm9iamVjdCIsInNoYXBlIiwiaWQiLCJzdHJpbmciLCJyZXF1aXJlZCIsInV1aWQiLCJ2YWxpZGF0ZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsR0FBRyxDQUFDQyxNQUFKLEdBQWFDLEtBQWIsQ0FBbUI7QUFDaENDLEVBQUFBLEVBQUUsRUFBRUgsR0FBRyxDQUFDSSxNQUFKLEdBQWFDLFFBQWIsR0FBd0JDLElBQXhCO0FBRDRCLENBQW5CLENBQWY7QUFJTyxNQUFNQyxVQUFrRixHQUFHLG9DQUNoR1IsTUFEZ0csQ0FBM0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IHt2YWxpZGF0ZVNjaGVtYX0gZnJvbSAnLi92YWxpZGF0ZS1zY2hlbWEnO1xuXG5jb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICBpZDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkudXVpZCgpLFxufSk7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUlkOiA8SWQgPSBzdHJpbmcsIFQgZXh0ZW5kcyB7aWQ6IElkfSA9IHtpZDogSWR9PihkYXRhOiBUKSA9PiBPYnNlcnZhYmxlPFQ+ID0gdmFsaWRhdGVTY2hlbWEoXG4gIHNjaGVtYSxcbik7XG4iXX0=