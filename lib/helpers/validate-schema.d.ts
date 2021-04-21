import type { Observable } from 'rxjs';
import * as Yup from 'yup';
export declare const validateSchema: <T>(schema?: Yup.SchemaOf<unknown>) => (data: T) => Observable<T>;
