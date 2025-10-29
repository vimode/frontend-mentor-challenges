import { Suspense, useState } from "react";
import { createPortal } from "react-dom";
import { formatDate } from "../../utils/formatDate.js";
import { weatherIcon } from "../../utils/weatherIcon.js";

function WeatherPanels({ weatherData }) {
  const [showDayDropdown, setShowDayDropdown] = useState(false);
  console.log(weatherData);
  //TODO: loading skeleton?
  const formattedDate = weatherData?.current?.time
    ? formatDate(weatherData.current.time)
    : "Loading...";

  const temperatureIcon = weatherData?.current?.weather_code
    ? weatherIcon(weatherData?.current?.weather_code)
    : "./assets/images/icon-loading.svg";

  console.log(`hourly`, weatherData?.hourly);

  // Daily Weather Component
  const DailyWeatherPanel = ({ weatherData }) => {
    const dailyWeatherData = weatherData?.daily;
    return (
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        {dailyWeatherData &&
          dailyWeatherData.time.map((daily, index) => {
            const dailyIcon = weatherIcon(dailyWeatherData.weather_code[index]);
            const day = new Intl.DateTimeFormat("en-US", {
              weekday: "short",
            }).format(new Date(daily));
            const highTemp =
              dailyWeatherData.temperature_2m_max[index].toFixed(0);
            const lowTemp =
              dailyWeatherData.temperature_2m_min[index].toFixed(0);

            return (
              <div className="dailyCard" key={daily.toString()}>
                <p className="text-preset-6">{day}</p>
                <img src={dailyIcon} alt="" />
                <div>
                  <p className="text-preset-7">{highTemp}&#176;</p>
                  <p className="text-preset-7">{lowTemp}&#176;</p>
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  // DailyForecast Dropdown Modal Component
  function DayDropdownModal({ onClose }) {
    // TODO: Move this to context
    const [currentDay, setCurrentDay] = useState("Monday");

    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    function updateDay(day) {
      setCurrentDay(day);
      onClose();
    }

    return (
      <div className="absolute top-[10%] right-[calc(var(--spacing)*4)] bg-midnight-neutral-800 border-1 border-midnight-neutral-600 rounded-xl w-1/2 p-2 z-10 flex flex-col gap-1 cursor-pointer">
        {days.map((day) => (
          <button
            key={day}
            className={`block w-full text-left text-preset-7 px-2 py-[10px] cursor-pointer transition-colors duration-300 hover:bg-midnight-neutral-700 rounded-xl ${currentDay === day ? "bg-midnight-neutral-700 rounded-xl" : ""}`}
            onClick={() => updateDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col gap-8 w-full self-center">
        {/* Current Weather */}
        <section className="flex flex-col md:flex-row gap-4 place-items-center rounded-[20px] px-6 py-10 md:py-[calc(var(--spacing)*26)] bg-[url(/assets/images/bg-today-small.svg)] md:bg-[url(/assets/images/bg-today-large.svg)] bg-no-repeat bg-center bg-cover">
          <div className="text-center md:text-left flex flex-col gap-3 w-full @container/currentW">
            <h2 className="text-preset-4">Berlin, Germany</h2>
            <p className="text-preset-6 opacity-80">{formattedDate}</p>
          </div>
          <div className="flex place-items-center ">
            <div className="@xs/currentW:w-full max-w-[120px] @xs/currentW:h-auto max-h-[120px]">
              <img src={temperatureIcon} alt="" />
            </div>
            <p className="text-preset-1">
              {weatherData?.current?.temperature_2m.toFixed(0)}&#176;
            </p>
          </div>
        </section>

        {/* Weather Details */}
        <section className="flex flex-wrap gap-4">
          <div className="detailsCard basis-(--xs-basis) md:basis-(--md-basis) lg:basis-(--lg-basis)">
            <p className="text-preset-6 text-midnight-neutral-200">
              Feels like
            </p>
            <p className="text-preset-3 text-midnight-neutral-0">
              {weatherData?.current?.apparent_temperature.toFixed(0)}&#176;
            </p>
          </div>
          <div className="detailsCard basis-(--xs-basis) md:basis-(--md-basis) lg:basis-(--lg-basis)">
            <p className="text-preset-6 text-midnight-neutral-200">Humidity</p>
            <p className="text-preset-3 text-midnight-neutral-0">
              {weatherData?.current?.relative_humidity_2m.toFixed(0)}%
            </p>
          </div>
          <div className="detailsCard basis-(--xs-basis) md:basis-(--md-basis) lg:basis-(--lg-basis)">
            <p className="text-preset-6 text-midnight-neutral-200">Wind</p>
            <p className="text-preset-3 text-midnight-neutral-0">
              {weatherData?.current?.wind_speed_10m.toFixed(0)} km/h
            </p>
          </div>
          <div className="detailsCard basis-(--xs-basis) md:basis-(--md-basis) lg:basis-(--lg-basis)">
            <p className="text-preset-6 text-midnight-neutral-200">
              Precipitation
            </p>
            <p className="text-preset-3 text-midnight-neutral-0">
              {weatherData?.current?.precipitation.toFixed(0)} mm
            </p>
          </div>
        </section>

        {/* Daily Forecast */}
        <section className="flex flex-col gap-5">
          <h3 className="text-preset-5">Daily Forecast</h3>
          <Suspense fallback={<div>Loading...</div>}>
            <DailyWeatherPanel weatherData={weatherData} />
          </Suspense>
        </section>
      </div>

      {/* Hourly Forecast */}
      <section
        id="hourlyForecast"
        className="bg-midnight-neutral-800 px-4 py-5 rounded-xl flex flex-col gap-4 lg:w-[45%] relative"
      >
        <header className="flex justify-between items-center">
          <h3 className="text-preset-5">Hourly forecast</h3>
          {/* <p>Dropdown</p> */}
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
        <div className="hourlyCard">
          <div>
            <img src="/assets/images/icon-snow.webp" alt="" />
            <p className="text-preset-5-semibold">3 PM</p>
          </div>
          <p className="text-present-7">126&#176;</p>
        </div>
        <div className="hourlyCard">
          <div>
            <img src="/assets/images/icon-rain.webp" alt="" />
            <p className="text-preset-5-semibold">4 PM</p>
          </div>
          <p className="text-present-7">33&#176;</p>
        </div>
        <div className="hourlyCard">
          <div>
            <img src="/assets/images/icon-partly-cloudy.webp" alt="" />
            <p className="text-preset-5-semibold">5 PM</p>
          </div>
          <p className="text-present-7">30&#176;</p>
        </div>
        <div className="hourlyCard">
          <div>
            <img src="/assets/images/icon-overcast.webp" alt="" />
            <p className="text-preset-5-semibold">6 PM</p>
          </div>
          <p className="text-present-7">12&#176;</p>
        </div>
        <div className="hourlyCard">
          <div>
            <img src="/assets/images/icon-storm.webp" alt="" />
            <p className="text-preset-5-semibold">7 PM</p>
          </div>
          <p className="text-present-7">7&#176;</p>
        </div>
        <div className="hourlyCard">
          <div>
            <img src="/assets/images/icon-fog.webp" alt="" />
            <p className="text-preset-5-semibold">8 PM</p>
          </div>
          <p className="text-present-7">17&#176;</p>
        </div>
        <div className="hourlyCard">
          <div>
            <img src="/assets/images/icon-drizzle.webp" alt="" />
            <p className="text-preset-5-semibold">9 PM</p>
          </div>
          <p className="text-present-7">29&#176;</p>
        </div>
        <div className="hourlyCard">
          <div>
            <img src="/assets/images/icon-sunny.webp" alt="" />
            <p className="text-preset-5-semibold">10 PM</p>
          </div>
          <p className="text-present-7">24&#176;</p>
        </div>
      </section>
    </div>
  );
}

export default WeatherPanels;
