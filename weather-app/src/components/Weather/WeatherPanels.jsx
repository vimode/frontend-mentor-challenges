function WeatherPanels() {
  return (
    <>
      {/* Current Weather */}
      <section className="border-2  border-amber-200 flex">
        <div>
          <p>Berlin, Germany</p>
          <p>Tuesday, Aug 5, 2025</p>
        </div>
        <div>
          <p>icon</p>
          <p>20&#176;</p>
        </div>
      </section>

      {/* Weather Details */}
      <section className="border-2 border-red-800 flex">
        <div>
          <p>Feels like</p>
          <p>18&#176;</p>
        </div>
        <div>
          <p>Humidity</p>
          <p>46%</p>
        </div>
        <div>
          <p>Wind</p>
          <p>14 km/h</p>
        </div>
        <div>
          <p>Precipitation</p>
          <p>0 mm</p>
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
