export function getCurrentYear() {
  const formatter = new Intl.DateTimeFormat(undefined, { year: "numeric" })
  return formatter.format(new Date())
}