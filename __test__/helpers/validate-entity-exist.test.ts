import {validateEntityExist, ValidationError} from '@lib';

describe('validateEntityExist', () => {
  it('runs normally with an existing entity', () => {
    validateEntityExist({id: 'id'});
  });

  it("throws exception if entity doesn't exists", () => {
    expect(() => validateEntityExist(undefined)).toThrow(ValidationError);
  });
});

export {};
