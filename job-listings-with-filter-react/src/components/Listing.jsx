import React, { useState, useEffect } from 'react';

import './Listing.css'
import listingData from '../assets/data.json';

import SingleItem from './SingleItem.jsx';
import Filters from './Filters.jsx';

const Listing = () => {

  const [filters, setFilters] = useState([]);

  const [listingItems, setlistingItems] = useState([]);

  //on every load, fill fresh data (if this was an API, fetch API data with another useEffect and fill that data )
  useEffect(() => {
    setlistingItems(listingData);
  },[]);


  //Create a list of all tags for each data object, return the item to check with the filterfunction for filteredListing
  const filterFunction = (item) => {

    const allTags = [item.role, item.level];

    if (item.languages) {
      allTags.push(...item.languages);
    }

    if (item.tools) {
      allTags.push(...item.tools);
    }

    return filters.every((filter) => allTags.includes(filter));
  };

  // accepts the above filter function
  const filteredListing = listingItems.filter(filterFunction);

  // delete the single filter 
  const handleRemoveFilter = (filter) => {
    setFilters(filters.filter((item) => item !== filter));
  };

  // remove all filters
  const handleClearFilters = () => {
    setFilters([]);
  };

  //add tags  to filters
  const handleTagClick = (tag) => {
    if(filters.includes(tag)) {
      return;
    }
    setFilters([...filters, tag]);
  }

  return (
    <main className="outer_wrapper flex_">  
        {filters.length > 0 && (
          <Filters
            filters = {filters}
            handleClearFilters = {handleClearFilters}
            handleRemoveFilter = {handleRemoveFilter}
           />
        )}

      <section className="listing_wrapper flex_">
        
          {filteredListing.map((listingItem)=> 
            <SingleItem
              listingItem = {listingItem}
              key = {listingItem.id}
              handleTagClick = {handleTagClick}
            />            
          )}

      </section>
    </main>
  )
};

export default Listing;