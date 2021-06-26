import * as Yup from 'yup';
export declare const validateSchema: <T>(schema?: Yup.SchemaOf<unknown>) => (data: T) => Promise<T>;
