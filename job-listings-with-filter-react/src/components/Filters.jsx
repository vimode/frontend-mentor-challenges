import React from 'react';

import './Filters.css';

const Filters = ( {filters, handleClearFilters, handleRemoveFilter}) => {
  
  return (
    <div className='filter_wrapper flex_'>
      <div className="filter_list_wrapper flex_">
        {filters.map ((filter,index) => 
          <div className="filter_group flex_">
            <div 
              className="filter_item"
              key = {index}
              >
              {filter}
            </div>
            <button 
              className="filter_remove"
              onClick = {() => handleRemoveFilter(filter)}
            >
              x
            </button>
          </div>
        )}
      </div>
      <button
        className="clear_filter_btn"
        onClick = {handleClearFilters}
      >
        Clear
      </button>
    </div>
  )
};

export default Filters;