import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import { PlanetProvider } from './components/Context.jsx';

import PlanetsData from "./assets/data.json";

import Layout from "./components/Layout.jsx";
import Planet from "./components/Planet.jsx";

import "./App.css";

const App = () => {

  const [activePlanet, setActivePlanet] = useState();
  const [activePlanetData, setActivePlanetData] = useState();

  const location = useLocation()

// useEffect(() => {
//   let pData = PlanetsData.find(planet => planet.name === activePlanet)
//   setActivePlanetData(pData)
// }, [activePlanet]);

  
  return (
    <PlanetProvider 
      value = { { activePlanet, setActivePlanet, activePlanetData, setActivePlanetData } }
    >
      <Routes>
      <Route path= "/" element = {<Layout />}>
          <Route path = ":planetName" element = {<Planet />} />
          </Route>
      </Routes>
    </PlanetProvider>
  )
};

export default App;