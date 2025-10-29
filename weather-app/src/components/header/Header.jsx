import { createPortal } from "react-dom";
import { useState } from "react";

// Units Dropdown Modal
function UnitsDropdownModal({ onClose }) {
  const [metricUnits, setMetricUnits] = useState(false);

  return (
    <div className="absolute top-[120%] right-px px-[6px] py-2 bg-midnight-neutral-800 border-1 border-midnight-neutral-600  rounded-xl z-10 w-[calc(var(--spacing)*53)] cursor-pointer">
      <section className="flex flex-col">
        <h3
          className="text-preset-7 px-2 py-[10px] rounded-lg transition-colors duration-300 hover:bg-midnight-neutral-700"
          onClick={() => setMetricUnits((prev) => !prev)}
        >
          Switch to {metricUnits ? "Imperial" : "Metric"}
        </h3>
        <UnitSection
          title="Temperature"
          metricUnit="Celsius (&#176;C)"
          imperialUnit="Fahrenheit (&#176;F)"
          isMetric={metricUnits}
        />
      </section>
      <hr className="border-1 border-midnight-neutral-600 rounded-xl my-1" />
      <UnitSection
        title="Wind Speed"
        metricUnit="km/h"
        imperialUnit="mph"
        isMetric={metricUnits}
      />
      <hr className="border-1 border-midnight-neutral-600 rounded-xl my-1" />
      <UnitSection
        title="Precipitation"
        metricUnit="Millimeters (mm)"
        imperialUnit="Inches (in)"
        isMetric={metricUnits}
      />
    </div>
  );
}

function UnitSection({ title, metricUnit, imperialUnit, isMetric }) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="px-[6px] py-2 text-preset-6 text-midnight-neutral-300">
        {title}
      </h4>
      <p
        className={`flex justify-between items-center px-2 py-2 rounded-lg transition-colors duration-300 hover:bg-midnight-neutral-700 ${isMetric ? "bg-midnight-neutral-700" : ""}`}
      >
        {metricUnit}
        {isMetric && (
          <span>
            <img src="./assets/images/icon-checkmark.svg" />
          </span>
        )}
      </p>
      <p
        className={`flex justify-between items-center px-2 py-2 rounded-lg transition-colors duration-300 hover:bg-midnight-neutral-700 ${!isMetric ? "bg-midnight-neutral-700" : ""}`}
      >
        {imperialUnit}
        {!isMetric && (
          <span>
            <img src="./assets/images/icon-checkmark.svg" />
          </span>
        )}
      </p>
    </div>
  );
}

function Header() {
  const [showUnitsDropdown, setShowUnitsDropdown] = useState(false);

  return (
    <header className="flex justify-between items-center relative" id="header">
      <img src="./assets/images/logo.svg" />
      <button
        className="bg-midnight-neutral-800 px-4 py-3 rounded-lg cursor-pointer"
        onClick={() => {
          setShowUnitsDropdown((prev) => !prev);
        }}
      >
        <img className="inline" src="./assets/images/icon-units.svg" />
        &nbsp;&nbsp;Units&nbsp;&nbsp;
        <img className="inline" src="./assets/images/icon-dropdown.svg" />
      </button>
      {showUnitsDropdown &&
        createPortal(
          <UnitsDropdownModal onClose={() => setShowUnitsDropdown(false)} />,
          document.getElementById("header"),
        )}
    </header>
  );
}

export default Header;
