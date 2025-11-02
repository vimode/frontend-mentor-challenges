import { createPortal } from "react-dom";
import { useState } from "react";
import DayDropdownModal from "./DayDropdownModal";

export default function HourlyForecastPanel() {
  const [showDayDropdown, setShowDayDropdown] = useState(false);
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

// TODO: Move to is own Component
function HourlyForecastCard() {
  return (
    <>
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
    </>
  );
}
