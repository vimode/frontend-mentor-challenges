import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import  PlanetsData from "../../assets/data.json";

import { PlanetConsumer } from "../Context.jsx";

import "./Navbar.css";

const Navbar = () => {

const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [navClick, setNavClick] = useState(false);
// const [currentLocation, setCurrentLocation] = useState('/');

// const location = useLocation()
//   console.log(location)

  // useEffect(() => {
  //   setCurrentLocation(location.pathname);
  // }
  // ), [location];

useEffect(() => {
  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  windowWidth >= 768 ? setNavClick(false) : ""
}, [windowWidth]);

  
  return (
    <PlanetConsumer>
      {context => {

        const handlePlanet = (pName) => {
          context.setActivePlanet(pName);
          let pData = PlanetsData.find(planet => planet.name === pName)
          context.setActivePlanetData(pData);
          setNavClick(false);        
        }

        const handleNavClick = () => {
          setNavClick(!navClick);
        }
            
        return (
            <nav className = "navbar">
        
              <div 
                className={`mobile_nav_icons ${navClick && "nav_icon_opacity"}`}
                onClick = {handleNavClick}
                >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
              </div>

              <ul className={`${navClick ? 'flex_ nav_items' : 'nav_items_hidden'}`}>
                { PlanetsData.map((planet) => 
                  <li
                    key = {planet.temperature}
                    className = {`nav_item flex_ nav_item_${planet.name}`}
                  >
                    <NavLink
                    to = {`/${planet.name.toLowerCase()}`}
                    onClick = { () => handlePlanet(planet.name)}
                    className = {
                      ({isActive}) => isActive ? `nav_link_${planet.name}` : "nav_link"} 
                    > {planet.name}
                    </NavLink>
                    <svg className="mobile_chevron" xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg>
                  </li>
                ) }
              </ul>

            </nav>)}}
    </PlanetConsumer>
  )
}

export default Navbar;