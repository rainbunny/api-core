import * as Yup from 'yup';
import {ValidationError} from '../errors';

export const validateSchema =
  <T>(schema?: Yup.SchemaOf<unknown>) =>
  (data: T): Promise<T> =>
    schema
      ? schema
          .validate(data)
          .then(() => data)
          .catch((err) => {
            throw new ValidationError(err.message);
          })
      : Promise.resolve(data);
