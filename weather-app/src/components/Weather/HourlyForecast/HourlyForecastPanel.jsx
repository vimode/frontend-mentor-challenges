import { createPortal } from "react-dom";
import { useState } from "react";
import DayDropdownModal from "./DayDropdownModal";
import HourlyCard from "./HourlyCard";
import { getTimeAndDateValues } from "../../../utils/timeAndDate";
import { weatherIcon } from "../../../utils/weatherIcon";

export default function HourlyForecastPanel({ weatherData }) {
  const [showDayDropdown, setShowDayDropdown] = useState(false);
  console.log(`hourly`, weatherData ? weatherData : null);

  function eightHoursData(weatherData) {
    const userTZ = weatherData?.current?.timezone;
    console.log(userTZ);

    // Current time in user's tz
    const timeNow = weatherData?.current?.time
      ? getTimeAndDateValues(weatherData.current.time, userTZ)
      : "Loading...";
    console.log("timeNow", timeNow);

    const targetDay = timeNow?.day;

    // All hourly data
    const hourlyTimes = weatherData?.hourly?.time ?? [];
    const temps = weatherData?.hourly?.temperature_2m ?? [];
    const weatherCode = weatherData?.hourly?.weather_code ?? [];
    console.log("hourlyTimes", hourlyTimes);

    // Filter time data for today
    const todayFiltered = hourlyTimes?.filter(
      (item) => new Date(item).getUTCDate() === Number(targetDay.trim()),
    );
    console.log("todayFiltered", todayFiltered);

    // Matching Index where today's data starts and ends in hourlyTimes
    const matchingIndex = todayFiltered?.map((item) =>
      hourlyTimes.findIndex((t) => t.toString() === item.toString()),
    );
    console.log("indices_for_matching_date_in_timesdata", matchingIndex);

    let startIdx = todayFiltered.findIndex(
      (t) => new Date(t).getUTCHours() >= Number(timeNow.hour),
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
    const chosenCodes = chosenIndices.map((i) => weatherIcon( weatherCode[i]));
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

  eightHoursData(weatherData);

  return (
    <section
      id="hourlyForecast"
      className="bg-midnight-neutral-800 px-4 py-5 rounded-xl flex flex-col gap-4 lg:w-[45%] relative"
    >
      <header className="flex justify-between items-center">
        <h3 className="text-preset-5">Hourly forecast</h3>
        <button
          className="bg-midnight-neutral-600 px-4 py-2 rounded-lg cursor-pointer"
          onClick={() => setShowDayDropdown((prev) => !prev)}
        >
          Dropdown&nbsp;&nbsp;
          <img className="inline" src="./assets/images/icon-dropdown.svg" />
        </button>
        {showDayDropdown &&
          createPortal(
            <DayDropdownModal onClose={() => setShowDayDropdown(false)} />,
            document.getElementById("hourlyForecast"),
          )}
      </header>
      <HourlyForecastCard />
    </section>
  );
}

// TODO: Move to its own Component
function HourlyForecastCard() {
  return (
    <>
      <HourlyCard
        imgSrc="/assets/images/icon-snow.webp"
        imgAlt=""
        time="3 PM"
        temp="22"
      />
      <HourlyCard
        imgSrc="/assets/images/icon-snow.webp"
        imgAlt=""
        time="3 PM"
        temp="22"
      />
      <HourlyCard
        imgSrc="/assets/images/icon-snow.webp"
        imgAlt=""
        time="3 PM"
        temp="22"
      />
      <HourlyCard
        imgSrc="/assets/images/icon-snow.webp"
        imgAlt=""
        time="3 PM"
        temp="22"
      />
      <HourlyCard
        imgSrc="/assets/images/icon-snow.webp"
        imgAlt=""
        time="3 PM"
        temp="22"
      />
      <HourlyCard
        imgSrc="/assets/images/icon-snow.webp"
        imgAlt=""
        time="3 PM"
        temp="22"
      />
      <HourlyCard
        imgSrc="/assets/images/icon-snow.webp"
        imgAlt=""
        time="3 PM"
        temp="22"
      />
      <HourlyCard
        imgSrc="/assets/images/icon-snow.webp"
        imgAlt=""
        time="3 PM"
        temp="22"
      />
    </>
  );
}
