import React from "react";

import "./ValueCards.css";

const ValueCards = ( { valueCardData, valueCardClass, valueCardTitle } ) => {
  
  return (
    <section className = {`valueCards_wrapper inner_wrapper flex_ ${valueCardClass}`}>
      <h1 className="section_title">{valueCardTitle}</h1>
      <ul className="valueCards flex_">
        { valueCardData && valueCardData.map((item) => 
        <li key ={item.id} className="valueCard flex_">
          <img src={item.src} />
          <div className="img_number flex_">{item.value}</div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </li>
        )}
      </ul>

    </section>

  )
}

export default ValueCards;