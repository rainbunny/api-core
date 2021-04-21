"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCreatedByField = void 0;

const addCreatedByField = fields => fields.includes('createdBy') ? fields : [...fields, 'createdBy'];

exports.addCreatedByField = addCreatedByField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2FkZC1jcmVhdGVkLWJ5LWZpZWxkLnRzIl0sIm5hbWVzIjpbImFkZENyZWF0ZWRCeUZpZWxkIiwiZmllbGRzIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxpQkFBaUIsR0FBSUMsTUFBRCxJQUMvQkEsTUFBTSxDQUFDQyxRQUFQLENBQWdCLFdBQWhCLElBQStCRCxNQUEvQixHQUF3QyxDQUFDLEdBQUdBLE1BQUosRUFBWSxXQUFaLENBRG5DIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFkZENyZWF0ZWRCeUZpZWxkID0gKGZpZWxkczogc3RyaW5nW10pOiBzdHJpbmdbXSA9PlxuICBmaWVsZHMuaW5jbHVkZXMoJ2NyZWF0ZWRCeScpID8gZmllbGRzIDogWy4uLmZpZWxkcywgJ2NyZWF0ZWRCeSddO1xuIl19