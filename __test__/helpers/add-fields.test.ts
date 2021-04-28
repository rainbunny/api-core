import {addFields} from '@lib';

describe('addFields', () => {
  it('returns new array with new fields', () => {
    const fields = addFields({fields: ['id', 'name'], newFields: ['createdBy']});
    expect(fields).toMatchInlineSnapshot(`
      Array [
        "id",
        "name",
        "createdBy",
      ]
    `);
  });

  it('removes duplicated fields', () => {
    const fields = addFields({fields: ['id', 'name'], newFields: ['id', 'createdBy']});
    expect(fields).toMatchInlineSnapshot(`
      Array [
        "id",
        "name",
        "createdBy",
      ]
    `);
  });
});

export {};
