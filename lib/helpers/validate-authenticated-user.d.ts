import type { AuthUser } from '../interfaces';
export declare const validateAuthenticatedUser: (user: AuthUser) => <T>(entity?: T) => T;
