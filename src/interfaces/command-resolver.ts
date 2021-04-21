/* eslint-disable @typescript-eslint/no-explicit-any */
import type {GraphQLResolveInfo} from 'graphql';
import type {Command} from './command';
import type {Context} from './context';

export type CommandResolver<C extends Command = Command> = (
  args: {payload: C},
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<any>;
