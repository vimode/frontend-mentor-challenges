// Formats a date into readable string based on userTZ. - "Sunday, 11 Jan 2025"
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

// Based on userTZ, return current time and date and split into parts - weekday, month, day, year, hour
export function getTimeAndDateValues(currentDateAndTime, userTimeZone) {
  const date = new Date(currentDateAndTime);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: userTimeZone || "UTC",
    hour: "numeric",
    hour12: true,
    hourCycle: "h11",
    dayPeriod: "short",
  };

  // mdn: use Intl for internationalization
  const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(date);

  const localeTokens = {};

  parts
    .filter((p) => p.type !== "literal")
    .map((p) => {
      localeTokens[p.type] = p.value;
    });

  if (localeTokens.dayPeriod) {
    const ampm = {
      "in the morning": "AM",
      noon: "PM",
      "in the afternoon": "PM",
      "in the evening": "PM",
      "at night": "PM",
    };
    localeTokens.dayPeriod =
      ampm[localeTokens.dayPeriod] || localeTokens.dayPeriod;
  }

  return localeTokens;
}
