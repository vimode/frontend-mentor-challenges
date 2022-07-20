import { NavLink } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { HeaderWrapper } from "./Header.styles.js";

function Header () {
  return (
    <HeaderWrapper>
      <NavLink to="/" tabIndex={0}>
        <img src="/images/logo.svg"  alt="Logo"/>
      </NavLink>
      <Navbar />
    </HeaderWrapper>
  )
}

export default Header;