import { useState } from "react";

// components
import DropdownMenu from "./DropdownMenu";
import { NavItems, NavStyledLink, ButtonWrapper, DropdownButton } from "./Navigation.styles"


function NavItem ({navLink}) {

  const [dropdown, setDropdown] = useState(false);

  return (

    <NavItems>
      { navLink.dropdownItems ? (
        <ButtonWrapper>
        <DropdownButton
          onClick={() => setDropdown((prev) => !prev)}
        >{navLink.title}</DropdownButton>
        {dropdown && <DropdownMenu dropdownLinks={navLink.dropdownItems} />}
        </ButtonWrapper>
      ) : (
        <NavStyledLink href={navLink.link}>{navLink.title}</NavStyledLink>
      )}
    </NavItems>

  )
};

export default NavItem;