import _ from 'lodash/fp';

export const addFields = ({fields, newFields}: {fields: string[]; newFields: string[]}): string[] =>
  _.uniq([...fields, ...newFields]);
