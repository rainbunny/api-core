import * as yup from 'yup';
import {createEntity} from '@lib';

describe('createEntity', () => {
  it('creates a new record successfully', (done) => {
    const entity = {
      id: '',
      name: 'Thinh Tran',
      username: 'thinhtran',
    };
    const schema = yup.object().shape({
      name: yup.string().required(),
      username: yup.string().required(),
    });
    const repository = {
      create: jest.fn().mockReturnValue(Promise.resolve('id')),
    };

    createEntity({
      entity,
      repository,
      schema,
    }).then((id) => {
      expect(repository.create).toHaveBeenCalledWith({id: '', name: 'Thinh Tran', username: 'thinhtran'});
      expect(id).toMatchInlineSnapshot(`"id"`);
      done();
    });
  });

  it('creates a new record successfully with permission validation', (done) => {
    const entity = {
      id: '',
      name: 'Thinh Tran',
      username: 'thinhtran',
    };
    const schema = yup.object().shape({
      name: yup.string().required(),
      username: yup.string().required(),
    });
    const repository = {
      create: jest.fn().mockReturnValue(Promise.resolve('id')),
    };
    const validatePermissions = jest.fn().mockReturnValue(Promise.resolve({}));

    createEntity({
      entity,
      repository,
      schema,
      validatePermissions,
    }).then((id) => {
      expect(repository.create).toHaveBeenCalledWith(entity);
      expect(validatePermissions).toHaveBeenCalledWith(entity);
      expect(id).toMatchInlineSnapshot(`"id"`);
      done();
    });
  });
});

export {};
