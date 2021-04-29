/* eslint-disable @typescript-eslint/no-explicit-any */
import {convertHandlersToResolvers} from '@lib';

import {of} from 'rxjs';

describe('convertHandlersToResolvers', () => {
  beforeEach(() => {});
  it('converts service handlers to graphql resolvers', async () => {
    jest.mock('graphql-fields', () => () => ({
      data: {},
    }));
    const sampleQuery = () => ({
      toPromise: jest.fn().mockReturnValue({data: [{id: '1', name: 'Thinh'}], pagination: {totalCount: 1}}),
    });
    const resolvers = convertHandlersToResolvers({
      Query: {
        sampleQuery: sampleQuery as any,
      },
      Mutation: {
        sampleEntity: {
          sampleCommandHandler: () => of([]),
        },
      },
    });
    const queryResult = resolvers.Query.sampleQuery(
      {},
      {
        query: {
          fields: ['id', 'name'],
        },
      },
      {},
      {} as any,
    );
    expect(queryResult).toMatchInlineSnapshot(`
      Object {
        "data": Array [
          Object {
            "id": "1",
            "name": "Thinh",
          },
        ],
        "pagination": Object {
          "totalCount": 1,
        },
      }
    `);
  });
});

export {};
