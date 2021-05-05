import {sanitizeOffsetQuery} from '@lib';

describe('sanitizeOffsetQuery', () => {
  it('returns new sanitized queries', () => {
    expect(sanitizeOffsetQuery({fields: {id: {}, name: {}}})).toMatchInlineSnapshot(`
      Object {
        "fields": Object {
          "id": Object {},
          "name": Object {},
        },
        "pageIndex": 0,
        "rowsPerPage": 10,
      }
    `);
    expect(sanitizeOffsetQuery({fields: {id: {}, name: {}}, rowsPerPage: 100, pageIndex: -10})).toMatchInlineSnapshot(`
      Object {
        "fields": Object {
          "id": Object {},
          "name": Object {},
        },
        "pageIndex": 0,
        "rowsPerPage": 50,
      }
    `);
  });
});

export {};
