export const addCreatedByField = (fields: string[]): string[] =>
  fields.includes('createdBy') ? fields : [...fields, 'createdBy'];
