import {validateAuthenticatedUser} from '@lib';
import {ForbiddenError} from 'apollo-server';

describe('validateAuthenticatedUser', () => {
  it('runs normally with an authenticated user', () => {
    const book = {id: '1', name: 'Book 1'};
    const validatedBook = validateAuthenticatedUser({id: 'id'})(book);
    expect(validatedBook).toBe(book);
  });

  it('throws exception if not an authenticated user', () => {
    const book = {id: '1', name: 'Book 1'};
    expect(() => validateAuthenticatedUser(undefined)(book)).toThrow(ForbiddenError);
  });
});

export {};
