import React from "react";

import "./Location.css";

import PageHeader from "../components/PageHeader/PageHeader";
import Button from "../components/Button/Button";

const Location = () => {

  return (
    <>
      <PageHeader 
        pageHeaderClass = "locationPage"
        pageHeaderTitle= "Locations"
      />

      <section className="inner_wrapper location_map">
        <img src="./assets/images/world-map-desktop.png" className="location_map_img desktop_image" />
        <img src="./assets/images/world-map-mobile.png" className="location_map_img mobile_image" />
        <div className="location_tabs_outer_wrapper">
          <div className="location_tab_wrapper">
            <h4 className="location_tab">New York</h4>
            <div className="yellow_triangle"></div>
          </div>
          <div className="location_tab_wrapper">
            <h4 className="location_tab">London</h4>
            <div className="yellow_triangle"></div>
          </div>
          <div className="location_tab_wrapper">
            <h4 className="location_tab">Yokohama</h4>
            <div className="yellow_triangle"></div>
          </div>
          <div className="location_tab_wrapper">
            <h4 className="location_tab">Jakarta</h4>
            <div className="yellow_triangle"></div>
          </div>
        </div>
      </section>

      <section className="location_info inner_wrapper flex_">
        <h2>Your City Not Listed?</h2>
        <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
        <Button 
          btnClassName = "location_button"
          buttonText= "Message Us"
        />

      </section>
    </>
  )
};

export default Location;