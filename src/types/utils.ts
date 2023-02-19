
export type DeepRequired<T> = {
  [K in keyof T]: NonNullable<Required<DeepRequired<T[K]>>>
}
