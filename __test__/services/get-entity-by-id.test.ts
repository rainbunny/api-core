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
        Promise.resolve({
          id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
          name: 'thinh',
        }),
      ),
    };

    getEntityById({
      query,
      repository,
    }).then((result) => {
      expect(repository.getById).toHaveBeenCalledWith(query);
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
        Promise.resolve({
          id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
          name: 'thinh',
        }),
      ),
    };
    const validatePermissions = jest.fn().mockReturnValue(Promise.resolve({}));

    getEntityById({
      query,
      repository,
      validatePermissions,
    }).then((result) => {
      expect(repository.getById).toHaveBeenCalledWith(query);
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
