/** convert search term to make it compatible with full text search.
 * Example: 'first book' to 'first & book'
 */
export declare const convertSearchTerm: (searchTerm: string) => string;
