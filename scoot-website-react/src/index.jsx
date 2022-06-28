import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About.jsx"
import Careers from "./pages/Careers.jsx";
import HomePage from "./pages/HomePage.jsx";
import Location from "./pages/Location.jsx";
import NotFound from "./pages/NotFound.jsx";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<App />} >
          <Route index element = {<HomePage />} />
          <Route path = "about" element = {<About />} />
          <Route path = "careers" element = {<Careers />} />
          <Route path = "location" element = {<Location />} />
        </Route>
          <Route path = "*" element = {<NotFound />} />
      </Routes>
    </BrowserRouter>, 
  document.getElementById("root")
);

//  Hot Module Replacement (HMR) - Remove this snippet to remove HMR.

//  if (undefined /* [snowpack] import.meta.hot */ ) {
//    undefined /* [snowpack] import.meta.hot */ .accept();
//  }