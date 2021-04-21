import type { Observable } from 'rxjs';
export declare const validateId: <Id = string, T extends {
    id: Id;
} = {
    id: Id;
}>(data: T) => Observable<T>;
