import { Command } from './command';
export interface UpdateCommand<Id = string> extends Command {
    id: Id;
}
