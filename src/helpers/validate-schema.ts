import type {Observable} from 'rxjs';

import {ValidationError} from 'apollo-server';
import * as Yup from 'yup';
import {from, of} from 'rxjs';

export const validateSchema = <T>(schema?: Yup.SchemaOf<unknown>) => (data: T): Observable<T> =>
  schema
    ? from(
        schema
          .validate(data)
          .then(() => data)
          .catch((err) => {
            throw new ValidationError(err.message);
          }),
      )
    : of(data);
