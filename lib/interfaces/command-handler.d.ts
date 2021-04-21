import type { Observable } from 'rxjs';
import type { Context } from './context';
import type { Command } from './command';
export declare type CommandHandler<C extends Command = Command> = (command: C, context: Context) => Observable<any>;
