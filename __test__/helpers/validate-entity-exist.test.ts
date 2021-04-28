import {validateEntityExist} from '@lib';
import {ValidationError} from 'apollo-server';

describe('validateEntityExist', () => {
  it('runs normally with an existing entity', () => {
    validateEntityExist({id: 'id'});
  });

  it("throws exception if entity doesn't exists", () => {
    expect(() => validateEntityExist(undefined)).toThrow(ValidationError);
  });
});

export {};
