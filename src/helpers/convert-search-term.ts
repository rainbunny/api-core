import _ from 'lodash/fp';

/** Extend solution from https://stackoverflow.com/a/26482552/5954646 */
const removeSpecialCharacters = _.pipe(
  (str: string) => str || '',
  _.split(''),
  _.filter((char) => _.toUpper(char) !== _.toLower(char) || _.trim(char) === '' || Number.isInteger(char)),
  _.join(''),
);

/** convert search term to make it compatible with full text search.
 * Example: 'first book' to 'first & book'
 */
export const convertSearchTerm: (searchTerm: string) => string = _.pipe(
  removeSpecialCharacters,
  _.split(' '),
  _.filter((word) => Boolean(word)),
  _.join(' & '),
);
