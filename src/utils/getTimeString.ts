export default function getTimeString(date: string): string {
  if (!date) return "";

  const currentTime = Date.now();
  const _12h = 1000 * 60 * 60 * 12;
  const dateMs = new Date(date).getTime();

  const currentYear = new Date().getFullYear();
  const dateYear = new Date(date).getFullYear();

  const passedYear = dateYear < currentYear;
  const passed12h = currentTime - dateMs > _12h;

  const internalizeDate = (config: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-us", config).format(new Date(date));

  const dayMonthYearConfig: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const dayMonthConfig: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
  };

  const hourConfig: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return passedYear
    ? internalizeDate(dayMonthYearConfig)
    : passed12h
    ? internalizeDate(dayMonthConfig)
    : internalizeDate(hourConfig);
}
