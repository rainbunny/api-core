"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateId = void 0;

var yup = _interopRequireWildcard(require("yup"));

var _validateSchema = require("./validate-schema");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const schema = yup.object().shape({
  id: yup.string().required().uuid()
});
const validateId = (0, _validateSchema.validateSchema)(schema);
exports.validateId = validateId;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3ZhbGlkYXRlLWlkLnRzIl0sIm5hbWVzIjpbInNjaGVtYSIsInl1cCIsIm9iamVjdCIsInNoYXBlIiwiaWQiLCJzdHJpbmciLCJyZXF1aXJlZCIsInV1aWQiLCJ2YWxpZGF0ZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7OztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsR0FBRyxDQUFDQyxNQUFKLEdBQWFDLEtBQWIsQ0FBbUI7QUFDaENDLEVBQUFBLEVBQUUsRUFBRUgsR0FBRyxDQUFDSSxNQUFKLEdBQWFDLFFBQWIsR0FBd0JDLElBQXhCO0FBRDRCLENBQW5CLENBQWY7QUFJTyxNQUFNQyxVQUFvRixHQUMvRixvQ0FBZVIsTUFBZixDQURLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3ZhbGlkYXRlU2NoZW1hfSBmcm9tICcuL3ZhbGlkYXRlLXNjaGVtYSc7XG5cbmNvbnN0IHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gIGlkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS51dWlkKCksXG59KTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlSWQ6IDxJZCA9IHN0cmluZywgVCBleHRlbmRzIHtpZDogSWR9ID0ge2lkOiBJZH0+KGVudGl0eTogVCkgPT4gT2JzZXJ2YWJsZTxUPiA9XG4gIHZhbGlkYXRlU2NoZW1hKHNjaGVtYSk7XG4iXX0=