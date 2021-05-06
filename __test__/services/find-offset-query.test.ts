import {of} from 'rxjs';
import * as yup from 'yup';
import {findOffsetQuery} from '@lib';

describe('findOffsetQuery', () => {
  it('returns search result successfully', (done) => {
    const query = {
      name: 'thinh',
      pageIndex: 0,
      rowsPerPage: 10,
      fields: {
        data: {
          id: {},
          name: {},
        },
        pagination: {
          total: {},
        },
      },
    };
    const defaultQuery = {};
    const querySchema = yup.object().shape({
      name: yup.string().required(),
    });
    const repository = {
      find: jest.fn().mockReturnValue(
        of({
          data: [],
          pagination: {},
        }),
      ),
      count: jest.fn().mockReturnValue(of(10)),
    };

    findOffsetQuery({
      query,
      querySchema,
      repository,
      defaultQuery,
    }).subscribe((result) => {
      expect(repository.find).toHaveBeenCalledWith(query);
      expect(repository.count).toHaveBeenCalledWith(query);
      expect(result).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "data": Array [],
            "pagination": Object {},
          },
          "pagination": Object {
            "pageIndex": 0,
            "rowsPerPage": 10,
            "total": 10,
          },
        }
      `);
      done();
    });
  });

  it('returns search result successfully without getting total', (done) => {
    const query = {
      name: 'thinh',
      pageIndex: 0,
      rowsPerPage: 10,
      fields: {
        data: {
          id: {},
          name: {},
        },
      },
    };
    const defaultQuery = {};
    const querySchema = yup.object().shape({
      name: yup.string().required(),
    });
    const repository = {
      find: jest.fn().mockReturnValue(
        of({
          data: [],
          pagination: {},
        }),
      ),
      count: jest.fn().mockReturnValue(of(10)),
    };

    findOffsetQuery({
      query,
      querySchema,
      repository,
      defaultQuery,
    }).subscribe((result) => {
      expect(repository.find).toHaveBeenCalledWith(query);
      expect(repository.count).not.toHaveBeenCalled();
      expect(result).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "data": Array [],
            "pagination": Object {},
          },
          "pagination": Object {
            "pageIndex": 0,
            "rowsPerPage": 10,
            "total": 0,
          },
        }
      `);
      done();
    });
  });

  it('returns search result successfully with permission validation', (done) => {
    const query = {
      name: 'thinh',
      pageIndex: 0,
      rowsPerPage: 10,
      fields: {
        data: {
          id: {},
          name: {},
        },
        pagination: {
          total: {},
        },
      },
    };
    const defaultQuery = {};
    const querySchema = yup.object().shape({
      name: yup.string().required(),
    });
    const repository = {
      find: jest.fn().mockReturnValue(
        of({
          data: [],
          pagination: {},
        }),
      ),
      count: jest.fn().mockReturnValue(of(10)),
    };
    const validatePermissions = jest.fn().mockReturnValue(of({}));

    findOffsetQuery({
      query,
      querySchema,
      repository,
      defaultQuery,
      validatePermissions,
    }).subscribe((result) => {
      expect(repository.find).toHaveBeenCalledWith(query);
      expect(validatePermissions).toHaveBeenCalledWith(query);
      expect(result).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "data": Array [],
            "pagination": Object {},
          },
          "pagination": Object {
            "pageIndex": 0,
            "rowsPerPage": 10,
            "total": 10,
          },
        }
      `);
      done();
    });
  });
});

export {};
