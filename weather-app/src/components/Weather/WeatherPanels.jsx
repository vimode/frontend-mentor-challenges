function WeatherPanels() {
  return (
    <>
      {/* Current Weather */}
      <section className="flex flex-col gap-4 place-items-center rounded-[20px] px-6 py-10 bg-[url(/assets/images/bg-today-small.svg)] md:bg-[url(/assets/images/bg-today-large.svg)] bg-no-repeat bg-center bg-cover">
        <div className="text-center flex flex-col gap-3 w-full @container/currentW">
          <h2 className="text-preset-4">Berlin, Germany</h2>
          <p className="text-preset-6 opacity-80">Tuesday, Aug 5, 2025</p>
        </div>
        <div className="flex place-items-center ">
          <div className="@xs/currentW:w-full max-w-[120px] @xs/currentW:h-auto max-h-[120px]">
            <img src="/assets/images/icon-sunny.webp" />
          </div>
          <p className="text-preset-1">20&#176;</p>
        </div>
      </section>

      {/* Weather Details */}
      <section className="flex flex-wrap gap-4">
        <div className="detailsCard basis-(--xs-basis) md:basis-(--md-basis) lg:basis-(--lg-basis)">
          <p className="text-preset-6 text-midnight-neutral-200">Feels like</p>
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
      <section className="border-2 border-pink-500 flex">
        <div>
          <p>Mon</p>
          <p>icon</p>
          <div>
            <p>20&#176;</p>
            <p>14&#176;</p>
          </div>
        </div>
        <div>
          <p>Tue</p>
          <p>icon</p>
          <div>
            <p>20&#176;</p>
            <p>14&#176;</p>
          </div>
        </div>
        <div>
          <p>Wed</p>
          <p>icon</p>
          <div>
            <p>20&#176;</p>
            <p>14&#176;</p>
          </div>
        </div>
        <div>
          <p>Thu</p>
          <p>icon</p>
          <div>
            <p>20&#176;</p>
            <p>14&#176;</p>
          </div>
        </div>
        <div>
          <p>Fri</p>
          <p>icon</p>
          <div>
            <p>20&#176;</p>
            <p>14&#176;</p>
          </div>
        </div>
        <div>
          <p>Sat</p>
          <p>icon</p>
          <div>
            <p>20&#176;</p>
            <p>14&#176;</p>
          </div>
        </div>
        <div>
          <p>Sun</p>
          <p>icon</p>
          <div>
            <p>20&#176;</p>
            <p>14&#176;</p>
          </div>
        </div>
      </section>

      {/* Hourly Forecast */}
      <section className="border-2 border-emerald-500">
        <header className="flex justify-between">
          <h3>Hourly forecast</h3>
          <p>Dropdown</p>
        </header>
        <div>
          <p>
            icon<span>3 PM</span>
          </p>
          <p>20&#176;</p>
        </div>
        <div>
          <p>
            icon<span>4 PM</span>
          </p>
          <p>20&#176;</p>
        </div>
        <div>
          <p>
            icon<span>5 PM</span>
          </p>
          <p>20&#176;</p>
        </div>
        <div>
          <p>
            icon<span>6 PM</span>
          </p>
          <p>20&#176;</p>
        </div>
        <div>
          <p>
            icon<span>7 PM</span>
          </p>
          <p>20&#176;</p>
        </div>
        <div>
          <p>
            icon<span>8 PM</span>
          </p>
          <p>20&#176;</p>
        </div>
        <div>
          <p>
            icon<span>9 PM</span>
          </p>
          <p>20&#176;</p>
        </div>
        <div>
          <p>
            icon<span>10 PM</span>
          </p>
          <p>20&#176;</p>
        </div>
      </section>
    </>
  );
}

export default WeatherPanels;
