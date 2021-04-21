import type { CommandHandler, CommandResolver, QueryHandler, QueryResolver } from '@lib/interfaces';
interface HandlerParams {
    Query: {
        [entityName: string]: QueryHandler;
    };
    Mutation: {
        [entityName: string]: {
            [commandName: string]: CommandHandler;
        };
    };
}
interface HandlerResult {
    Query: {
        [entityName: string]: QueryResolver;
    };
    Mutation: {
        [entityName: string]: () => {
            [commandName: string]: CommandResolver;
        };
    };
    [key: string]: unknown;
}
export declare const convertHandlersToResolvers: (handlers: HandlerParams) => HandlerResult;
export {};
