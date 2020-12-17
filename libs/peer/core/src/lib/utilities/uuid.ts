export function S4(): string {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}
export function uid(): string {
  return `${S4()}-${S4()}-${S4()}`
}
export function uuid(): string {
  return `${S4()}${S4()}-${uid()}-${S4()}${S4()}${S4()}`
}
