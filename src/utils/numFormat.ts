export function numFormat(number: number) {
  return number
    .toString()
    .split(/(?=(?:...)*$)/)
    .join(' ')
}
