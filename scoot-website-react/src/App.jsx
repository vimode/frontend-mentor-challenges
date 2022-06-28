import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header"
import DownloadApp from "./components/DownloadApp/DownloadApp.jsx";
import Footer from "./components/Footer/Footer.jsx"

const App = () => {

  return(
    <div className="App outer_wrapper grid_">
      <Header /> 
        <Outlet />
        <DownloadApp />
      <Footer />
    </div>
  )
};

export default App;