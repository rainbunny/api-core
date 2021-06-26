import {validateId, ValidationError} from '@lib';

describe('validateId', () => {
  it('runs normally with an guid id', (done) => {
    validateId({id: 'e92ff1be-a814-11eb-bcbc-0242ac130002'}).then((entity) => {
      expect(entity).toMatchInlineSnapshot(`
        Object {
          "id": "e92ff1be-a814-11eb-bcbc-0242ac130002",
        }
      `);
      done();
    });
  });

  it("throws exception if it's an invalid guid", (done) => {
    validateId({id: 'id'}).catch((err) => {
      expect(err).toBeInstanceOf(ValidationError);
      done();
    });
  });
});

export {};
