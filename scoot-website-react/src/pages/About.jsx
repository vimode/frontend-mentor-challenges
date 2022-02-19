import React from "react";

import "./About.css";

import aboutHighlightImageA from '../assets/images/digital-era.jpg';
import aboutHighlightImageB from '../assets/images/better-living.jpg';

import FAQ from "../data/faqData";
import valueCardData from "../data/valueCardData";

import PageHeader from "../components/PageHeader/PageHeader";
import PageHighlight from "../components/PageHighlight/PageHighlight";
import ValueCards from "../components/ValueCards/ValueCards";
import FAQCard from "../components/FAQCard/FAQCard";

const About = () => {

  return(
    <>
      <PageHeader 
        pageHeaderClass = "aboutPage"
        pageHeaderTitle = "About"
      />

      <PageHighlight 
        pageClass = "feature_highlight_a"
        pageHighlight_title = "Mobility for the digital era"
        pageHighlight_content = "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
        pageHighlight_image = {aboutHighlightImageA}
      />

      <PageHighlight 
        pageClass = "feature_highlight_b flex_inverted"
        pageHighlight_title = "Better urban living"
        pageHighlight_content = "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
        pageHighlight_image = {aboutHighlightImageB}
      />

      <ValueCards 
        valueCardData = {valueCardData}
        valueCardClass = "aboutPage_value"
        valueCardTitle = "Our values"
      />

      <section className="faq_outer_wrapper flex_">
        <h1 className="inner_wrapper section_title">FAQs</h1>
        <FAQCard 
          faqClass = "about_faq about_faq_1"
          faqTitle= "How it works"
          faqData = {FAQ[0]}
        />

        <FAQCard 
          faqClass = "about_faq about_faq_2"
          faqTitle= "Safe driving"
          faqData = {FAQ[1]}
        />
      </section>

    </>
  )
};

export default About;