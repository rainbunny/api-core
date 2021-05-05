import type { AuthUser } from '@lib/interfaces';
export declare const validateOwner: (user?: AuthUser) => <T extends {
    createdBy?: string;
}>(entity: T) => T;
