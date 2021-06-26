import {updateEntity} from '@lib';

describe('updateEntity', () => {
  it('updates entity successfully', (done) => {
    const entity = {
      id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
      name: 'thinh new',
      createdBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
    };
    const user = {
      id: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
    };
    const oldEntity = {
      id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
      name: 'thinh',
      createdBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
    };
    const repository = {
      getById: jest.fn().mockReturnValue(Promise.resolve(oldEntity)),
      update: jest.fn().mockReturnValue(Promise.resolve()),
    };

    updateEntity({
      entity,
      repository,
      user,
    }).then(() => {
      expect(repository.getById).toHaveBeenCalledWith({
        id: entity.id,
        fields: {
          createdBy: {},
          id: {},
        },
      });
      expect(repository.update).toHaveBeenCalledWith({
        createdBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
        id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
        lastModifiedBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
        name: 'thinh new',
      });
      done();
    });
  });

  it('updates entity with permission validation', (done) => {
    const entity = {
      id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
      name: 'thinh new',
      createdBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
    };
    const user = {
      id: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
    };
    const oldEntity = {
      id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
      name: 'thinh',
      createdBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
    };
    const repository = {
      getById: jest.fn().mockReturnValue(Promise.resolve(oldEntity)),
      update: jest.fn().mockReturnValue(Promise.resolve({})),
    };

    const validatePermissions = jest.fn().mockReturnValue(Promise.resolve(oldEntity));

    updateEntity({
      entity,
      repository,
      user,
      validatePermissions,
    }).then(() => {
      expect(repository.getById).toHaveBeenCalledWith({
        id: entity.id,
        fields: {
          createdBy: {},
          id: {},
        },
      });
      expect(validatePermissions).toHaveBeenCalledWith(oldEntity);
      expect(repository.update).toHaveBeenCalledWith({
        createdBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
        id: 'c995e7d7-117a-417a-b767-aa59c50e1e0b',
        lastModifiedBy: '0be5eb0a-44c4-4d6e-82c1-a89aa8cbc9bc',
        name: 'thinh new',
      });
      done();
    });
  });
});

export {};
