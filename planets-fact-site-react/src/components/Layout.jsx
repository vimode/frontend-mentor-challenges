import React from "react";

import { Outlet} from "react-router-dom";

import Header from "./Header/Header.jsx";

const Layout = () => {

  return (
    <div className= "outer_wrapper flex_">
        <Header />
        <Outlet/>
      </div>

  )
};

export default Layout;