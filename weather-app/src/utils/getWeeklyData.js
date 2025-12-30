import { getTimeAndDateValues } from "./timeAndDate";
import { weatherIcon } from "./weatherIcon";

export function eightHoursData(weatherData, selectedDay) {
  const userTZ = weatherData?.current?.timezone;

  // Current time in user's tz
  const timeNow = weatherData?.current?.time
    ? getTimeAndDateValues(weatherData.current.time, userTZ)
    : "Loading...";
  console.log("timeNow", timeNow);

  const targetDay = timeNow?.day;
  const targetWeekday =
    selectedDay?.toLowerCase() ?? timeNow?.weekday?.toLowerCase();

  // All hourly data
  const hourlyTimes = weatherData?.hourly?.time ?? [];
  const temps = weatherData?.hourly?.temperature_2m ?? [];
  const weatherCode = weatherData?.hourly?.weather_code ?? [];
  console.log("hourlyTimes", hourlyTimes);

  const weekdayIndex = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  let weekHourlyTimes = [];
  for (let i = 0; i < 7; i++) {
    let startDay = parseInt(targetDay) + i;
    const day = hourlyTimes?.filter(
      (item) => new Date(item).getUTCDate() === startDay,
    );
    weekHourlyTimes.push(day);
  }
  console.log("weekHourlyTimes", weekHourlyTimes);

  const targetIdx = weekdayIndex[targetWeekday];

  const todayFiltered = weekHourlyTimes
    .filter((item) => {
      const d = new Date(item[0]);
      return d.getUTCDay() === targetIdx;
    })
    .flat();
  console.log("todayFiltered", todayFiltered);

  // Matching Index where today's data starts and ends in hourlyTimes
  const matchingIndex = todayFiltered?.map((item) =>
    hourlyTimes.findIndex((t) => t.toString() === item.toString()),
  );
  console.log("indices_for_matching_date_in_hourlyTimes", matchingIndex);

  let startIdx = todayFiltered.findIndex(
    (t) => new Date(t).getUTCHours() >= parseInt(timeNow.hour),
  );

  console.log("startIdx", startIdx);

  // Keep track of matchingIndex
  let chosenIndices = [];

  if (startIdx === -1) {
    // No future time data - use last 8 entries
    console.group("No future time data");
    chosenIndices = matchingIndex.slice(-8);
    console.log("chosenIndices", chosenIndices);
    console.groupEnd();
  } else {
    console.group("Future Times");
    const futureTimes = matchingIndex.slice(startIdx, startIdx + 8);
    console.log("futureTimes", futureTimes);
    if (futureTimes.length === 8) {
      chosenIndices = futureTimes;
      console.log("indices length is 8", chosenIndices);
    } else {
      console.log("length incomplete");
      const needed = 8 - futureTimes.length;
      const pastTimes = matchingIndex.slice(
        Math.max(0, startIdx - needed),
        startIdx,
      );
      console.log("need", needed);
      console.log("pastTimes", pastTimes);
      chosenIndices = [...pastTimes, ...futureTimes];
      console.log("combined indicies", chosenIndices);
      console.groupEnd();
    }
  }

  const chosenTimes = chosenIndices.map((i) => hourlyTimes[i]);
  const chosenTemps = chosenIndices.map((i) => temps[i]);
  const chosenCodes = chosenIndices.map((i) => weatherIcon(weatherCode[i]));
  console.log({
    time: chosenTimes,
    temperature: chosenTemps,
    weatherCode: chosenCodes,
  });

  return {
    time: chosenTimes,
    temperature: chosenTemps,
    weatherCode: chosenCodes,
  };
}
