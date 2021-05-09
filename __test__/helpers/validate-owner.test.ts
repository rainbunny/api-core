import {validateOwner, ForbiddenError} from '@lib';

describe('validateOwner', () => {
  it('runs normally for the owner', () => {
    const entity = validateOwner({id: '25bf296e-d6de-4d27-9383-2c6e34db48e1'})({
      id: 'e92ff1be-a814-11eb-bcbc-0242ac130002',
      createdBy: '25bf296e-d6de-4d27-9383-2c6e34db48e1',
    });
    expect(entity).toMatchInlineSnapshot(`
      Object {
        "createdBy": "25bf296e-d6de-4d27-9383-2c6e34db48e1",
        "id": "e92ff1be-a814-11eb-bcbc-0242ac130002",
      }
    `);
  });

  it('throws exception if not authenticated', () => {
    expect(() =>
      validateOwner(undefined)({
        id: 'e92ff1be-a814-11eb-bcbc-0242ac130002',
        createdBy: '16984da6-8fc0-4894-b7c2-553110b45f43',
      }),
    ).toThrow(ForbiddenError);
  });

  it('throws exception if not the owner', () => {
    expect(() =>
      validateOwner({id: '25bf296e-d6de-4d27-9383-2c6e34db48e1'})({
        id: 'e92ff1be-a814-11eb-bcbc-0242ac130002',
        createdBy: '16984da6-8fc0-4894-b7c2-553110b45f43',
      }),
    ).toThrow(ForbiddenError);
  });
});

export {};
