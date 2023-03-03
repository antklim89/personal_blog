/* eslint-disable @typescript-eslint/ban-types */

declare module '*.webp' {
    export default string;
}


declare type DeepPartial<T> = Partial<{
    [K in keyof T]: DeepPartial<T[K]>
}>


declare type DeepRequired<T> = NonNullable<{
    [K in keyof T]-?: DeepRequired<T[K] & {}>
}>
