
export type DeepRequired<T> = {
  [K in keyof T]: NonNullable<DeepRequired<T[K]>>
}
