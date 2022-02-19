import React from "react";

import "./PageHighlight.css";

import Button from "../Button/Button";

const PageHighlight = ( {pageClass,  pageHighlight_title, pageHighlight_content, pageHighlight_image, pageButton, pageButtonText} ) => {
  return (
    <section className={`pageHighlight ${pageClass}`}>
      
      <div className="pageHighlight_wrapper inner_wrapper flex_">
        <div className="highlight_content flex_">
          <h2>{pageHighlight_title}</h2>
          <p>{pageHighlight_content}</p>
          {pageButton && <Button
            btnClassName = "highlightButton"
            buttonText = {`${pageButtonText ? pageButtonText : "Learn More"} `}
          />}
        </div>
        <div className="highlight_image">
          <img src={pageHighlight_image} />
        </div>
      </div>
    </section>
  )
}

export default PageHighlight;