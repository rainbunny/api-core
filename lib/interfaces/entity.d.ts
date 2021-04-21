export interface Entity<Id = string> {
    id: Id;
    createdAt?: string;
    createdBy?: string;
    lastModifiedAt?: string;
    lastModifiedBy?: string;
}
export interface SoftDeletedEntity<Id = string> extends Entity<Id> {
    isDeleted: boolean;
    deletedAt?: string;
    deletedBy?: string;
}
