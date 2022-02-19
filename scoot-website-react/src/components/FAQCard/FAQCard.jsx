import React, { useState } from "react";

import "./FAQCard.css";


const FAQCard = ( {faqClass, faqTitle,  faqData}) => {

const [activeItem, setActiveItem] = useState(0);

  const handleToggle = (index) =>  {
    setActiveItem(index)
  }

  return (
    <section className={`faq_section inner_wrapper flex_ ${faqClass}`}>
      <h2 className={`faqTitle ${faqClass}`}>{faqTitle}</h2>
      <ul className="faq_wrapper flex_">

        { faqData.map((item, index) => 
         <li 
          key={item.id}
          className="faq_item flex_"
          onClick = { () => handleToggle(index)}
          >
           <div className="faq_item_question flex_">
            <h4>{item.question}</h4>
            <img 
              src="./assets/icons/chevron.svg" 
              className= {`chevron_icon ${ activeItem === index && `chevron_icon_rotate`}`} />
           </div>
           {activeItem === index &&<p className="faq_answer_text">{item.answer}</p>}
         </li>
        )}

      </ul>

    </section>

  )
}

export default FAQCard;