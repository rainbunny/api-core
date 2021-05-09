import type {Observable} from 'rxjs';
import * as yup from 'yup';
import {validateSchema} from './validate-schema';

const schema = yup.object().shape({
  id: yup.string().required().uuid(),
});

export const validateId: <Id = string, T extends {id: Id} = {id: Id}>(entity: T) => Observable<T> = validateSchema(
  schema,
);
