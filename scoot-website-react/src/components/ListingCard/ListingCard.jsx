import React from "react";
import Button from "../Button/Button";

import "./ListingCard.css";

const ListingCard =  ({listingCardData,listingCardClass}) => {
  
  return (
    <ul className={`listing_item_wrapper flex_ ${listingCardClass}`}>
      {listingCardData && listingCardData.map((item,index) => 
      <li className="listing_item flex_" key={item.id}>
        <div className="">
          <h4>{item.position}</h4>
          <p>{item.location}</p>
        </div>
        <Button 
          btnClassName = "careerListing"
          buttonText = "Apply"
        />
      </li>
      )}
      
    </ul>
  )
};

export default ListingCard;