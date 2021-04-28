/* eslint-disable @typescript-eslint/no-explicit-any */
import {baseResolvers} from '@lib';

describe('baseResolvers', () => {
  it('return correct default configuration', () => {
    const resolvers = baseResolvers();
    expect(resolvers).toMatchInlineSnapshot(`
      Object {
        "JSON": "JSON",
        "Mutation": Object {
          "_": [Function],
        },
        "Query": Object {
          "_": [Function],
          "appName": [Function],
          "version": [Function],
        },
      }
    `);
    expect((resolvers.Mutation as any)._()).toMatchInlineSnapshot(`""`);
    expect((resolvers.Query as any)._()).toMatchInlineSnapshot(`""`);
    expect((resolvers.Query as any).appName()).toMatchInlineSnapshot(`"API"`);
    expect((resolvers.Query as any).version()).toMatchInlineSnapshot(`"0.1.0.1"`);
  });
});

export {};
