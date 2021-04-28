import * as yup from 'yup';
import {validateSchema} from '@lib';
import {ValidationError} from 'apollo-server';

describe('validateSchema', () => {
  it('runs normally with a valid entity', (done) => {
    const input = {
      id: 'e92ff1be-a814-11eb-bcbc-0242ac130002',
      name: 'Thinh',
    };
    const schema = yup.object().shape({
      id: yup.string().required().uuid(),
      name: yup.string().required().max(4000),
    });
    validateSchema(schema)(input).subscribe((entity) => {
      expect(entity).toMatchInlineSnapshot(`
        Object {
          "id": "e92ff1be-a814-11eb-bcbc-0242ac130002",
          "name": "Thinh",
        }
      `);
      done();
    });
  });

  it('throws exception if not a valid entity', (done) => {
    const input = {
      id: 'e92ff1be-a814-11eb-bcbc-0242ac130002',
      name: '',
    };
    const schema = yup.object().shape({
      id: yup.string().required().uuid(),
      name: yup.string().required().max(4000),
    });
    validateSchema(schema)(input).subscribe({
      error: (err) => {
        expect(err).toBeInstanceOf(ValidationError);
        done();
      },
    });
  });

  it('run normally if no schema is provided', (done) => {
    const input = {
      id: 'e92ff1be-a814-11eb-bcbc-0242ac130002',
      name: '',
    };
    validateSchema()(input).subscribe((entity) => {
      expect(entity).toMatchInlineSnapshot(`
        Object {
          "id": "e92ff1be-a814-11eb-bcbc-0242ac130002",
          "name": "",
        }
      `);
      done();
    });
  });
});

export {};
