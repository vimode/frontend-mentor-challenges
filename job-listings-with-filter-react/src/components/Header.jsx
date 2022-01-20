import React from 'react';

import './Header.css';

const Header = () => {

  return (
    <header className= "header_wrapper"> 
      <img 
        src= "./images/bg-header-desktop.svg"
        alt="" 
        className="desktop_header_img" 
      />
      <img 
        src="./images/bg-header-mobile.svg" 
        alt=""
        className="mobile_header_img"
      />
    </header>
  )
};

export default Header;