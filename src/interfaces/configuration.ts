export type Configuration = Readonly<{
  APP_NAME: string;
  VERSION: string;
  BUILD: string;
  DEFAULT_ITEMS_PER_REQUEST: number;
  MAX_ITEMS_PER_REQUEST: number;
}>;
