import { createPortal } from "react-dom";
import { useState } from "react";

// Unis Dropdown Modal
function UnitsDropdownModal({ onClose }) {
  const [units, setUnits] = useState(null);

  return (
    <div className="absolute top-[120%] right-px p-2 bg-midnight-neutral-800 border-1 border-midnight-neutral-600 rounded-xl">
      <h3>Switch to Imperial</h3>
      <p>Temperature</p>
      <p>Celsius (&#176;C)</p>
    </div>
  );
}

function Header() {
  const [showUnitsDropdown, setShowUnitsDropdown] = useState(false);

  return (
    <header className="flex justify-between items-center relative" id="header">
      <img src="./assets/images/logo.svg" />
      <button
        className="bg-midnight-neutral-800 px-4 py-3 rounded-lg"
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
