function WeatherPanels() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col gap-8 w-full self-center">
        {/* Current Weather */}
        <section className="flex flex-col md:flex-row gap-4 place-items-center rounded-[20px] px-6 py-10 md:py-[calc(var(--spacing)*26)] bg-[url(/assets/images/bg-today-small.svg)] md:bg-[url(/assets/images/bg-today-large.svg)] bg-no-repeat bg-center bg-cover">
          <div className="text-center md:text-left flex flex-col gap-3 w-full @container/currentW">
            <h2 className="text-preset-4">Berlin, Germany</h2>
            <p className="text-preset-6 opacity-80">Tuesday, Aug 5, 2025</p>
          </div>
          <div className="flex place-items-center ">
            <div className="@xs/currentW:w-full max-w-[120px] @xs/currentW:h-auto max-h-[120px]">
              <img src="/assets/images/icon-sunny.webp" alt="" />
            </div>
            <p className="text-preset-1">20&#176;</p>
          </div>
        </section>

        {/* Weather Details */}
        <section className="flex flex-wrap gap-4">
          <div className="detailsCard basis-(--xs-basis) md:basis-(--md-basis) lg:basis-(--lg-basis)">
            <p className="text-preset-6 text-midnight-neutral-200">
              Feels like
            </p>
            <p className="text-preset-3 text-midnight-neutral-0">18&#176;</p>
          </div>
          <div className="detailsCard basis-(--xs-basis) md:basis-(--md-basis) lg:basis-(--lg-basis)">
            <p className="text-preset-6 text-midnight-neutral-200">Humidity</p>
            <p className="text-preset-3 text-midnight-neutral-0">46%</p>
          </div>
          <div className="detailsCard basis-(--xs-basis) md:basis-(--md-basis) lg:basis-(--lg-basis)">
            <p className="text-preset-6 text-midnight-neutral-200">Wind</p>
            <p className="text-preset-3 text-midnight-neutral-0">14 km/h</p>
          </div>
          <div className="detailsCard basis-(--xs-basis) md:basis-(--md-basis) lg:basis-(--lg-basis)">
            <p className="text-preset-6 text-midnight-neutral-200">
              Precipitation
            </p>
            <p className="text-preset-3 text-midnight-neutral-0">0 mm</p>
          </div>
        </section>

        {/* Daily Forecast */}
        <section className="flex flex-col gap-5">
          <h3 className="text-preset-5">Daily Forecast</h3>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="dailyCard">
              <p className="text-preset-6">Mon</p>
              <img src="/assets/images/icon-storm.webp" alt="" />
              <div>
                <p className="text-preset-7">20&#176;</p>
                <p className="text-preset-7">14&#176;</p>
              </div>
            </div>
            <div className="dailyCard">
              <p className="text-preset-6">Tue</p>
              <img src="/assets/images/icon-drizzle.webp" alt="" />
              <div>
                <p className="text-preset-7">20&#176;</p>
                <p className="text-preset-7">14&#176;</p>
              </div>
            </div>
            <div className="dailyCard">
              <p className="text-preset-6">Wed</p>
              <img src="/assets/images/icon-fog.webp" alt="" />
              <div>
                <p className="text-preset-7">20&#176;</p>
                <p className="text-preset-7">14&#176;</p>
              </div>
            </div>
            <div className="dailyCard">
              <p className="text-preset-6">Thu</p>
              <img src="/assets/images/icon-overcast.webp" alt="" />
              <div>
                <p className="text-preset-7">20&#176;</p>
                <p className="text-preset-7">14&#176;</p>
              </div>
            </div>
            <div className="dailyCard">
              <p className="text-preset-6">Fri</p>
              <img src="/assets/images/icon-partly-cloudy.webp" alt="" />
              <div>
                <p className="text-preset-7">20&#176;</p>
                <p className="text-preset-7">14&#176;</p>
              </div>
            </div>
            <div className="dailyCard">
              <p className="text-preset-6">Sat</p>
              <img src="/assets/images/icon-rain.webp" alt="" />
              <div>
                <p className="text-preset-7">20&#176;</p>
                <p className="text-preset-7">14&#176;</p>
              </div>
            </div>
            <div className="dailyCard">
              <p className="text-preset-6">Sun</p>
              <img src="/assets/images/icon-snow.webp" alt="" />
              <div>
                <p className="text-preset-7">20&#176;</p>
                <p className="text-preset-7">14&#176;</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Hourly Forecast */}
      <section className="bg-midnight-neutral-800 px-4 py-5 rounded-xl flex flex-col gap-4 lg:w-[45%]">
        <header className="flex justify-between items-center">
          <h3 className="text-preset-5">Hourly forecast</h3>
          <p>Dropdown</p>
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
