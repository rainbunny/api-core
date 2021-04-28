import type {Configuration} from '@lib/interfaces';

let privateConfig: Configuration = Object.freeze({
  APP_NAME: process.env.APP_NAME || 'API',
  VERSION: process.env.VERSION || '0.1.0',
  BUILD: process.env.BUILD || '1',
  DEFAULT_ITEMS_PER_PAGE: +(process.env.DEFAULT_ITEMS_PER_PAGE || 10),
  MAX_ITEMS_PER_PAGE: +(process.env.MAX_ITEMS_PER_PAGE || 50),
});

export const updateConfig = (newConfig: Partial<Configuration>): void => {
  privateConfig = Object.freeze({
    ...privateConfig,
    ...newConfig,
  });
};

export const config = (): Readonly<Configuration> => privateConfig;
