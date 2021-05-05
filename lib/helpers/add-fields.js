"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addFields = void 0;

var _fp = _interopRequireDefault(require("lodash/fp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addFields = ({
  fields,
  newFields
}) => _fp.default.uniq([...fields, ...newFields]);

exports.addFields = addFields;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2FkZC1maWVsZHMudHMiXSwibmFtZXMiOlsiYWRkRmllbGRzIiwiZmllbGRzIiwibmV3RmllbGRzIiwiXyIsInVuaXEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLFNBQVMsR0FBRyxDQUFDO0FBQUNDLEVBQUFBLE1BQUQ7QUFBU0MsRUFBQUE7QUFBVCxDQUFELEtBQ3ZCQyxZQUFFQyxJQUFGLENBQU8sQ0FBQyxHQUFHSCxNQUFKLEVBQVksR0FBR0MsU0FBZixDQUFQLENBREsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gvZnAnO1xuXG5leHBvcnQgY29uc3QgYWRkRmllbGRzID0gKHtmaWVsZHMsIG5ld0ZpZWxkc306IHtmaWVsZHM6IHN0cmluZ1tdOyBuZXdGaWVsZHM6IHN0cmluZ1tdfSk6IHN0cmluZ1tdID0+XG4gIF8udW5pcShbLi4uZmllbGRzLCAuLi5uZXdGaWVsZHNdKTtcbiJdfQ==