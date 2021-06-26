export declare const validateId: <Id = string, T extends {
    id: Id;
} = {
    id: Id;
}>(entity: T) => Promise<T>;
