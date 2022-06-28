import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

import Button from "../Button/Button.jsx";


const Navbar = ( {navType, navBtn, mobileNavBtn} ) => {

  const [mobileNav, setMobileNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// sets mobilenav to false -- if mobile nav is open and window size changes to then tablet breakpoint, it will close it off.
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    windowWidth >= 768 ? setMobileNav(false) : ""
  }, [windowWidth]);

  // handles mobilenav open/close buttons
  const mobileNavClick = () => {
    setMobileNav(!mobileNav);
  }

// handles nav links 
  const mobileNavItemClick = () => {
    setMobileNav(false)
  }
  
  // handles nav button
  const navButtonClick = () => {
    setMobileNav(false)
    window.location.href = "#downloadApp"
  }

  return (

    <nav className={`${mobileNav && "mobileNavActive"} navbar  flex_ ${navType}`}>
      { mobileNavBtn && 
      <div 
        className="navbuttons flex_"
        onClick = {mobileNavClick}
        >
        <svg className={`${mobileNav ? "hide_btn" : "open_btn"}`} xmlns="http://www.w3.org/2000/svg" width="20" height="16"><g fill="#FCB72B" fillRule="evenodd"><path d="M0 0h19.692v3.692H0zM0 6.154h19.692v3.692H0zM0 12.308h19.692V16H0z"/></g></svg>
        <svg className={`${!mobileNav ? "hide_btn" : "close_btn"}`} xmlns="http://www.w3.org/2000/svg" width="18" height="18"><g fill="#FCB72B" fillRule="evenodd"><path d="M3.19.733l13.923 13.924-2.61 2.61L.579 3.343z"/><path d="M.579 14.657L14.503.733l2.61 2.61L3.19 17.267z"/></g></svg>
      </div>}
        <ul className="navItems flex_">
          <li className="navItem">
            <NavLink 
            to="about"
            onClick = {mobileNavItemClick}
            className= {({ isActive }) => isActive ? "navItem_active" : undefined}>
              About
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink 
            to="location"
            onClick = {mobileNavItemClick}
            className= {({ isActive }) => isActive ? "navItem_active" : undefined }>
              Location
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink 
            to="careers"
            onClick = {mobileNavItemClick}
            className= {({ isActive }) => isActive ? "navItem_active" : undefined}>
              Careers
            </NavLink>
          </li>
          
        </ul>
      { navBtn &&  
        <Button 
          btnClassName = "btn_nav"
          handleButtonClick = {navButtonClick}
          buttonText = "Get Scootin"
        /> }
      </nav>
  )
}

export default Navbar;