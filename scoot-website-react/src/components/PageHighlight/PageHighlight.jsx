import React from "react";

import {Link} from "react-router-dom";

import "./PageHighlight.css";

import Button from "../Button/Button";

const PageHighlight = ( {pageClass,  pageHighlight_title, pageHighlight_content, pageHighlight_image, pageButton, pageButtonText, btnNavigateTo} ) => {
  return (
    <section className={`pageHighlight ${pageClass}`}>
      
      <div className="pageHighlight_wrapper inner_wrapper flex_">
        <div className="highlight_content flex_">
          <h2>{pageHighlight_title}</h2>
          <p>{pageHighlight_content}</p>
          {pageButton && 
           <Link to={`${btnNavigateTo ? btnNavigateTo : "#"}`}>
            <Button
              btnClassName = "highlightButton"
              buttonText = {`${pageButtonText ? pageButtonText : "Learn More"} `}
            />
          </Link>
          }
        </div>
        <div className="highlight_image">
          <img src={pageHighlight_image} />
        </div>
      </div>
    </section>
  )
}

export default PageHighlight;