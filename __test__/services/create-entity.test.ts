import {of} from 'rxjs';
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
      create: jest.fn().mockReturnValue(of('id')),
    };

    createEntity({
      entity,
      repository,
      schema,
    }).subscribe((id) => {
      expect(repository.create).toHaveBeenCalledWith({id: '', name: 'Thinh Tran', username: 'thinhtran'}, 0);
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
      create: jest.fn().mockReturnValue(of('id')),
    };
    const validatePermissions = jest.fn().mockReturnValue(of({}));

    createEntity({
      entity,
      repository,
      schema,
      validatePermissions,
    }).subscribe((id) => {
      expect(repository.create).toHaveBeenCalledWith(entity, 0);
      expect(validatePermissions).toHaveBeenCalledWith(entity);
      expect(id).toMatchInlineSnapshot(`"id"`);
      done();
    });
  });
});

export {};
