import * as Yup from 'yup';
import type { Observable } from 'rxjs';
export declare const validateSchema: <T>(schema?: Yup.SchemaOf<unknown>) => (data: T) => Observable<T>;
