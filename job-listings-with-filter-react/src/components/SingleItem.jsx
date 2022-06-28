import React from 'react';

import './SingleItem.css';


const SingleItem = ({ listingItem,handleTagClick }) => {

  const tags = [listingItem.role, listingItem.level];

  if(listingItem.languages) {
    tags.push(...listingItem.languages)
  }

  if(listingItem.tools){
    tags.push(...listingItem.tools)
  }

  return (
    <div className={`item_wrapper flex_ ${listingItem.featured ? "featured" : ""}`}>

      <div className="listing_section_a flex_">

        <div className="listing_logo">
          <img src={listingItem.logo} alt="" />
        </div>
        
        <div className="listing_details flex_">
          <div className="listing_details_top flex_">
            <div className="listing_brand_name">{listingItem.company}</div>
            {listingItem.new && 
              <div className="listing_new">New!</div>}
            {listingItem.featured && 
              <div className="listing_featured">Featured</div>}
          </div>
          
  
            <div className="listing_detail_position"> {listingItem.position}
            </div>
          
          <div className="listing_details_data flex_">
            <div className="listing_details_date">{listingItem.postedAt}</div>
            <span className="dot"></span>
            <div className="listing_details_type">{listingItem.contract}</div>
            <span className="dot"></span>
            <div className="listing_details_location">{listingItem.location}</div>
          </div>
        
        </div>
      
      </div>

      <div className="listing_section_b">
        <div className="listing_tags flex_">
          {tags.map((tag, index) => (
            <button onClick={() => handleTagClick(tag)} key={index}>
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleItem;