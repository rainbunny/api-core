/* eslint-disable @typescript-eslint/no-explicit-any */
import {convertHandlersToResolvers} from '@lib';

const mockGraphqlFields = jest.fn();
jest.mock('graphql-fields', () => jest.fn());

describe('convertHandlersToResolvers', async () => {
  it('converts service handlers to graphql resolvers', async () => {
    const sampleResult = {data: [{id: '1', name: 'Thinh'}], pagination: {totalCount: 1}};
    const sampleQuery = () => Promise.resolve(sampleResult);
    const sampleCommand = () => Promise.resolve('1');
    const resolvers = convertHandlersToResolvers({
      Query: {
        sampleQuery: sampleQuery as any,
      },
      Mutation: {
        sampleEntity: {
          sampleCommand: sampleCommand as any,
        },
      },
    });
    mockGraphqlFields.mockReturnValue({
      data: {},
      pagination: {
        totalCount: {},
      },
    });
    const queryResult = await resolvers.Query.sampleQuery(
      {},
      {
        query: {},
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
    mockGraphqlFields.mockReturnValue({
      payload: {},
    });
    const commandResult = await resolvers.Mutation.sampleEntity().sampleCommand(
      {
        payload: {},
      },
      {
        user: {id: 'id'},
      },
      {} as any,
    );
    expect(commandResult).toMatchInlineSnapshot(`"1"`);
  });
});

export {};
