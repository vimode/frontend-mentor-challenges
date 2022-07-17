import { NavLink } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { HeaderWrapper } from "./Header.styles.js";

function Header () {
  return (
    <HeaderWrapper>
      <NavLink to="/">
        <img src="/images/logo.svg"  alt=""/>
      </NavLink>
      <Navbar />
    </HeaderWrapper>
  )
}

export default Header;