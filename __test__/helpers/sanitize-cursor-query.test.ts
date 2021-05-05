import {sanitizeCursorQuery} from '@lib';

describe('sanitizeCursorQuery', () => {
  it('returns new sanitized queries', () => {
    expect(sanitizeCursorQuery({fields: {id: {}, name: {}}})).toMatchInlineSnapshot(`
      Object {
        "fields": Object {
          "id": Object {},
          "name": Object {},
        },
        "rowsPerPage": 50,
      }
    `);
    expect(sanitizeCursorQuery({fields: {id: {}, name: {}}, rowsPerPage: 100})).toMatchInlineSnapshot(`
      Object {
        "fields": Object {
          "id": Object {},
          "name": Object {},
        },
        "rowsPerPage": 50,
      }
    `);
  });
});

export {};
