export function isSameDay(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function getEventDuration(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const shortDateFormatter = new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
  });
  const longDateFormatter = new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (isSameDay(startDate, endDate)) {
    return `${longDateFormatter.format(startDate)}`;
  }

  return `${shortDateFormatter.format(startDate)} - ${longDateFormatter.format(
    endDate
  )}`;
}