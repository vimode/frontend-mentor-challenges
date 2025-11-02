// format date to get the expected day in full, month in short, date and year in full
// add the timezone to adjust the offset from UTC time

export function formatDate(currentDate, userTimeZone) {
  currentDate = new Date(currentDate);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: userTimeZone || "UTC",
  };

  // mdn: use Intl for internationalization
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    currentDate,
  );

  return formattedDate;
}
