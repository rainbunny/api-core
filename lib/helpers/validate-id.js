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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3ZhbGlkYXRlLWlkLnRzIl0sIm5hbWVzIjpbInNjaGVtYSIsInl1cCIsIm9iamVjdCIsInNoYXBlIiwiaWQiLCJzdHJpbmciLCJyZXF1aXJlZCIsInV1aWQiLCJ2YWxpZGF0ZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsR0FBRyxDQUFDQyxNQUFKLEdBQWFDLEtBQWIsQ0FBbUI7QUFDaENDLEVBQUFBLEVBQUUsRUFBRUgsR0FBRyxDQUFDSSxNQUFKLEdBQWFDLFFBQWIsR0FBd0JDLElBQXhCO0FBRDRCLENBQW5CLENBQWY7QUFJTyxNQUFNQyxVQUFvRixHQUFHLG9DQUNsR1IsTUFEa0csQ0FBN0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcbmltcG9ydCB7dmFsaWRhdGVTY2hlbWF9IGZyb20gJy4vdmFsaWRhdGUtc2NoZW1hJztcblxuY29uc3Qgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgaWQ6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLnV1aWQoKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVJZDogPElkID0gc3RyaW5nLCBUIGV4dGVuZHMge2lkOiBJZH0gPSB7aWQ6IElkfT4oZW50aXR5OiBUKSA9PiBPYnNlcnZhYmxlPFQ+ID0gdmFsaWRhdGVTY2hlbWEoXG4gIHNjaGVtYSxcbik7XG4iXX0=