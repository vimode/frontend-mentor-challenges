import { Suspense } from "react";
import { formatDate } from "../../utils/formatDate.js";
import { weatherIcon } from "../../utils/weatherIcon.js";
import DailyWeatherPanel from "./DailyWeather/DailyWeatherPanel.jsx";
import HourlyForecastPanel from "./HourlyForecast/HourlyForecastPanel.jsx";

function WeatherPanels({ weatherData }) {
  console.log(weatherData);
  //TODO: loading skeleton?
  const userTZ = weatherData?.current?.timezone;
  const formattedDate = weatherData?.current?.time
    ? formatDate(weatherData.current.time, userTZ)
    : "Loading...";

  const temperatureIcon = weatherData?.current?.weather_code
    ? weatherIcon(weatherData?.current?.weather_code)
    : "./assets/images/icon-loading.svg";

  console.log(`hourly`, weatherData?.hourly);

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
      <HourlyForecastPanel />
    </div>
  );
}

export default WeatherPanels;
