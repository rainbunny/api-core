import {sanitizeOffsetQuery} from '@lib';

describe('sanitizeOffsetQuery', () => {
  it('returns new sanitized queries', () => {
    expect(sanitizeOffsetQuery({fields: ['id', 'name']})).toMatchInlineSnapshot(`
      Object {
        "fields": Array [
          "id",
          "name",
        ],
        "itemsPerPage": 10,
        "pageIndex": 0,
      }
    `);
    expect(sanitizeOffsetQuery({fields: ['id', 'name'], itemsPerPage: 100, pageIndex: -10})).toMatchInlineSnapshot(`
      Object {
        "fields": Array [
          "id",
          "name",
        ],
        "itemsPerPage": 50,
        "pageIndex": 0,
      }
    `);
  });
});

export {};
