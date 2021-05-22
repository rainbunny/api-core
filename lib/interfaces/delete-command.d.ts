import { Command } from './command';
export interface DeleteCommand<Id = string> extends Command {
    id: Id;
}
