export declare type Primitive = null | undefined | string | number | boolean | symbol | bigint;
export declare type DeepPartial<T> = T extends Primitive ? T : {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export declare type Dictionary<T> = Record<string, T>;
