// format date to get the expected day in full, month in short, date and year in full

export function formatDate(currentDate) {
  currentDate = new Date(currentDate);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // mdn: use Intl for internationalization
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    currentDate,
  );

  return formattedDate;
}
