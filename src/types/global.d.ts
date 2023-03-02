

declare module '*.webp' {
    export default string;
}


declare type DeepPartial<T> = Partial<{
    [K in keyof T]: DeepPartial<T[K]>
}>
