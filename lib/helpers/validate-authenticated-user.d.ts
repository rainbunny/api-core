import type { AuthUser } from '@lib/interfaces';
export declare const validateAuthenticatedUser: (user: AuthUser) => <T>(entity?: T) => T;
