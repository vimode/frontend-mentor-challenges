import { Suspense } from "react";
import { formatDate } from "../../utils/formatDate.js";
import { weatherIcon } from "../../utils/weatherIcon.js";
import DailyWeatherPanel from "./DailyWeather/DailyWeatherPanel.jsx";
import HourlyForecastPanel from "./HourlyForecast/HourlyForecastPanel.jsx";
import { useWeatherDataContext } from "../../weatherContext.jsx";
import WeatherDetailsPanel from "./WeatherDetails/WeatherDetailsPanel.jsx";

function WeatherPanels({ weatherData }) {
  const { currentCity } = useWeatherDataContext();
  console.log(weatherData);
  //TODO: loading skeleton?
  const userTZ = weatherData?.current?.timezone;
  const formattedDate = weatherData?.current?.time
    ? formatDate(weatherData.current.time, userTZ)
    : "Loading...";

  const weatherCode = weatherData?.current?.weather_code;
  let temperatureIcon;
  if (weatherCode === null || weatherCode == undefined) {
    temperatureIcon = "./assets/images/icon-loading.svg";
  } else {
    temperatureIcon = weatherIcon(weatherCode);
  }

  console.log(`hourly`, weatherData?.hourly);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col gap-8 w-full self-center">
        {/* Current Weather */}
        <section className="flex flex-col md:flex-row gap-4 place-items-center rounded-[20px] px-6 py-10 md:py-[calc(var(--spacing)*26)] bg-[url(/assets/images/bg-today-small.svg)] md:bg-[url(/assets/images/bg-today-large.svg)] bg-no-repeat bg-center bg-cover">
          <div className="text-center md:text-left flex flex-col gap-3 w-full @container/currentW">
            <h2 className="text-preset-4">
              {currentCity.name},&nbsp;{currentCity.country}
            </h2>
            <p className="text-preset-6 opacity-80">{formattedDate}</p>
          </div>
          <div className="flex place-items-center ">
            <div className="@xs/currentW:w-full max-w-[120px] @xs/currentW:h-auto max-h-[120px]">
              <img
                src={temperatureIcon["src"]}
                alt={temperatureIcon["alt_text"]}
              />
            </div>
            <p className="text-preset-1">
              {weatherData?.current?.temperature_2m.toFixed(0)}&#176;
            </p>
          </div>
        </section>

        {/* Weather Details */}
        <WeatherDetailsPanel weatherData={weatherData} />

        {/* Daily Forecast */}
        <section className="flex flex-col gap-5">
          <h3 className="text-preset-5">Daily Forecast</h3>
          <Suspense fallback={<div>Loading...</div>}>
            <DailyWeatherPanel weatherData={weatherData} />
          </Suspense>
        </section>
      </div>

      {/* Hourly Forecast */}
      <HourlyForecastPanel />
    </div>
  );
}

export default WeatherPanels;
