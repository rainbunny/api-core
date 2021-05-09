import type { Configuration } from './interfaces';
export declare const updateConfig: (newConfig: Partial<Configuration>) => void;
export declare const config: () => Readonly<Configuration>;
