import {Fields} from './fields';

export type Command = {
  commandId?: string;
  commandType?: string;
  fields?: Fields;
};
