import {validateId} from '@lib';
import {ValidationError} from 'apollo-server';

describe('validateId', () => {
  it('runs normally with an guid id', (done) => {
    validateId({id: 'e92ff1be-a814-11eb-bcbc-0242ac130002'}).subscribe((entity) => {
      expect(entity).toMatchInlineSnapshot(`
        Object {
          "id": "e92ff1be-a814-11eb-bcbc-0242ac130002",
        }
      `);
      done();
    });
  });

  it("throws exception if it's an invalid guid", (done) => {
    validateId({id: 'id'}).subscribe({
      error: (err) => {
        expect(err).toBeInstanceOf(ValidationError);
        done();
      },
    });
  });
});

export {};
