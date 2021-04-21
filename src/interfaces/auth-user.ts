export interface AuthUser<Id = string> {
  id: Id;
  roles?: string[];
  permissions?: string[];
}
