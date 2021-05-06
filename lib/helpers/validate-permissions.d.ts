import { AuthUser } from '@lib';
export declare const validatePermissions: ({ user, requiredRoles, requiredPermissions, }: {
    user: any;
    requiredRoles?: string[];
    requiredPermissions?: string[];
}) => void;
