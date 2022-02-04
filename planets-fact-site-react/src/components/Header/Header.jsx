import React from "react";
import { NavLink } from "react-router-dom";
import { PlanetConsumer } from "../Context.jsx";

import Navbar from "./Navbar.jsx";

import "./Header.css";

const Header = () => {
  return (
    <PlanetConsumer>
      { context => {      
      
        return (
          <header className = " brand_header flex_">
            
              <NavLink
                to = "/"
                alt= "The Planets Logo"
                aria-label = "homepage"
                className="brand_logo"
                // onClick = {handleLogoClick}
              >
                The Planets
              </NavLink>
            
              <Navbar />
          </header>
        )
      }}
    </PlanetConsumer>
  )
}

export default Header;