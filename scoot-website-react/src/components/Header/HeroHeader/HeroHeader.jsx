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
        {/* <svg className="hero_home_pattern" xmlns="http://www.w3.org/2000/svg" width="203" height="15"><path fill="none" stroke="#FCB72B" strokeWidth="15" d="M203 7.5H.5"/></svg> */}
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