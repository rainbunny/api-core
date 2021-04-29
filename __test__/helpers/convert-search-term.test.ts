import {convertSearchTerm} from '@lib';

describe('convertSearchTerm', () => {
  it('converts to Postgres valid search string & removes special characters', () => {
    const searchTerm = convertSearchTerm('Book and library @# !@% hay');
    expect(searchTerm).toMatchInlineSnapshot(`"Book & and & library & hay"`);
  });

  it('converts blank string', () => {
    const searchTerm = convertSearchTerm('');
    expect(searchTerm).toMatchInlineSnapshot(`""`);
  });
});

export {};
