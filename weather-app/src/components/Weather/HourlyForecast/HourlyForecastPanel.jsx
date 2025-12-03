import { useState, useEffect } from "react";
import DayDropdownModal from "./DayDropdownModal";
import { getTimeAndDateValues } from "../../../utils/timeAndDate";
import { eightHoursData } from "../../../utils/getWeeklyData";
import HourlyRow from "./HourlyRow";

export default function HourlyForecastPanel({ weatherData }) {
  const [showDayDropdown, setShowDayDropdown] = useState(false);
  console.log(`hourly`, weatherData ? weatherData : null);

  const userTZ = weatherData?.current?.timezone;
  // Current time in user's tz
  const timeNow = weatherData?.current?.time
    ? getTimeAndDateValues(weatherData.current.time, userTZ)
    : "Loading...";
  console.log("timeNow", timeNow);
  const [displayDay, setDisplayDay] = useState("");
  const [hourlyData, setHourlyData] = useState(null);

  // Update displayDay whenever API day is loaded and becomes available
  useEffect(() => {
    if (timeNow?.weekday) {
      setDisplayDay(timeNow.weekday);
    }
  }, [timeNow?.weekday]);

  useEffect(() => {
    if (displayDay) {
      const data = eightHoursData(weatherData, displayDay);
      setHourlyData(data);
    }
  }, [displayDay, weatherData]);

  function updateDropdownDay(selectedDay) {
    setDisplayDay(selectedDay);
    setShowDayDropdown(!showDayDropdown);
  }

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
          {displayDay}&nbsp;&nbsp;
          <img className="inline" src="./assets/images/icon-dropdown.svg" />
        </button>
        {showDayDropdown && (
          <DayDropdownModal
            displayDay={displayDay}
            updateDropdownDay={updateDropdownDay}
          />
        )}
      </header>
      <HourlyRow hourlyData={hourlyData} userTZ={userTZ} />
    </section>
  );
}
