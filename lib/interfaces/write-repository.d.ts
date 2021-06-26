import type { Entity } from './entity';
import type { GetByIdQuery } from './query';
export interface WriteRepository<Id = string, E extends Entity<Id> = Entity<Id>> {
    getById?: (query: GetByIdQuery<Id>) => Promise<E | undefined>;
    create?: (entity: Omit<E, 'id'>) => Promise<Id>;
    update?: (entity: {
        id: Id;
    } & Partial<E>) => Promise<void>;
    remove?: (id: Id) => Promise<void>;
}
