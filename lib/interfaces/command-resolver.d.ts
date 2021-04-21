import type { GraphQLResolveInfo } from 'graphql';
import type { Command } from './command';
import type { Context } from './context';
export declare type CommandResolver<C extends Command = Command> = (args: {
    payload: C;
}, context: Context, info: GraphQLResolveInfo) => Promise<any>;
