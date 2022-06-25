import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { HeaderWrapper } from "./Header.styles";

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