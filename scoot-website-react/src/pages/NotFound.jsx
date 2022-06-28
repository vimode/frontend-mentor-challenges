import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const NotFound = ( ) => {

  return (
    <>
      <Header />
      <section className="outer_wrapper">
        <img className="image_not_found" src="./assets/images/404.png"/>
      </section>
      <Footer />
    </>
  )
};

export default NotFound;