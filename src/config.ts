import type {Configuration} from '@lib/interfaces';

export const config: Configuration = Object.freeze({
  APP_NAME: process.env.APP_NAME || 'API',
  VERSION: '0.1.1',
  BUILD: process.env.BUILD || '1',
  DEFAULT_ITEMS_PER_REQUEST: +(process.env.DEFAULT_ITEMS_PER_REQUEST || 10),
  MAX_ITEMS_PER_REQUEST: +(process.env.MAX_ITEMS_PER_REQUEST || 50),
  STRING_MAX_LENGTH: 4000,
});
