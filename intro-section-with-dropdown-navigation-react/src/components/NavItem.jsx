import { useState } from "react";

// components
import DropdownMenu from "./DropdownMenu";


function NavItem ({navLink}) {

  const [dropdown, setDropdown] = useState(false);

  return (

    <li>
      { navLink.dropdownItems ? (
        <>
        <button
          onClick={() => setDropdown((prev) => !prev)}
        >{navLink.title}</button>
        <DropdownMenu dropdownLinks={navLink.dropdownItems} />
        </>
      ) : (
        <a>{navLink.title}</a>
      )}
    </li>

  )
};

export default NavItem;