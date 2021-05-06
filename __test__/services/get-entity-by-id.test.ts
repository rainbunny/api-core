import {of} from 'rxjs';
import {getEntityById} from '@lib';

describe('getEntityById', () => {
  it('returns entity successfully', (done) => {
    const query = {
      id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
      fields: {
        id: {},
        name: {},
      },
    };
    const repository = {
      getById: jest.fn().mockReturnValue(
        of({
          id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
          name: 'thinh',
        }),
      ),
    };

    getEntityById({
      query,
      repository,
    }).subscribe((result) => {
      expect(repository.getById).toHaveBeenCalledWith(query, 0);
      expect(result).toMatchInlineSnapshot(`
        Object {
          "id": "c995e7d7-117a-417a-b767-aa59c50e1e0b",
          "name": "thinh",
        }
      `);
      done();
    });
  });

  it('returns entity successfully with permission validation', (done) => {
    const query = {
      id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
      fields: {
        id: {},
        name: {},
      },
    };
    const repository = {
      getById: jest.fn().mockReturnValue(
        of({
          id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
          name: 'thinh',
        }),
      ),
    };
    const validatePermissions = jest.fn().mockReturnValue(of({}));

    getEntityById({
      query,
      repository,
      validatePermissions,
    }).subscribe((result) => {
      expect(repository.getById).toHaveBeenCalledWith(query, 0);
      expect(validatePermissions).toHaveBeenCalledWith({
        id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
        name: 'thinh',
      });
      expect(result).toMatchInlineSnapshot(`
        Object {
          "id": "c995e7d7-117a-417a-b767-aa59c50e1e0b",
          "name": "thinh",
        }
      `);
      done();
    });
  });
});

export {};
