import type { AuthUser } from '@lib/interfaces';
export declare const validatePermissions: ({ user, requiredRoles, requiredPermissions, }: {
    user: AuthUser;
    requiredRoles?: string[];
    requiredPermissions?: string[];
}) => void;
