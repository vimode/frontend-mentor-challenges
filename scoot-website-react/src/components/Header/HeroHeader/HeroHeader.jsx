import React from "react";

import Button from "../../Button/Button";

import "./HeroHeader.css";

const HeroHeader = ( {heroHeaderPageClass, heroHeaderTitle, heroHeaderContentText, heroHeaderButton} ) => { 
  return (
    <section className={`hero ${heroHeaderPageClass}`}>
      <div className="hero_wrapper inner_wrapper flex_">
        <h1 className={`hero_title`}>{heroHeaderTitle}</h1>
        { heroHeaderContentText && 
          <div className="hero_content_text flex_">
          <p className={`hero_text`}>{heroHeaderContentText}</p>
          </div>
        }
        { heroHeaderButton && 
          <a href="#downloadApp">
          <Button 
            btnClassName = "heroHeaderBtn"
            buttonText = "Get Scootin"
          /></a>}
      </div>

    </section>
  )
}

export default HeroHeader;