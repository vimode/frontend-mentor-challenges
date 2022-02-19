import React from "react";

import "./Careers.css";

import valueCardData from "../data/valueCardData";
import listingCardData from "../data/careersData";

import careersHighlightImageA from "../assets/images/join-us.jpg";
import PageHeader from "../components/PageHeader/PageHeader";
import PageHighlight from "../components/PageHighlight/PageHighlight";
import ValueCards from "../components/ValueCards/ValueCards";
import ListingCard from "../components/ListingCard/ListingCard";

const Careers = () => {
  
  return (
    <>
     <PageHeader 
      pageHeaderClass= "careersPage"     
      pageHeaderTitle= "Careers"
    />

    <PageHighlight 
      pageClass = "feature_highlight_a"
      pageHighlight_title = "Care to join our mission?"
      pageHighlight_content = "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
      pageHighlight_image = {careersHighlightImageA}
      pageButton = {true}
      pageButtonText = "Say Hello"
    />

    <ValueCards 
      valueCardData = {valueCardData}
      valueCardClass = "careersPage_value"
      valueCardTitle = "Why join us?"
    />

    <section className="inner_wrapper listing_outer_wrapper">
      <ListingCard 
        listingCardData = {listingCardData}
        listingCardClass = "career_job_listing"
      />
    </section>


    </>
  )
};

export default Careers;