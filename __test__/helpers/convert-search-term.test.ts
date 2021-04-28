import {convertSearchTerm} from '@lib';

describe('convertSearchTerm', () => {
  it('converts to Postgres valid search string & removes special characters', () => {
    const searchTerm = convertSearchTerm('Book and library @# !@% hay');
    expect(searchTerm).toMatchInlineSnapshot(`"Book & and & library & hay"`);
  });
});

export {};
